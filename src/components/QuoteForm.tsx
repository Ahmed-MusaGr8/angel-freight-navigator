
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    from: '',
    destination: '',
    type: '',
    weight: '',
    dimensions: '',
    serviceType: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote form submitted:', formData);
    toast({
      title: "Quote Request Submitted!",
      description: "We'll get back to you within 2 hours with a competitive quote.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-md bg-white shadow-xl border-0">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-navy-900">
          Calculate your shipment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="From"
              value={formData.from}
              onChange={(e) => handleInputChange('from', e.target.value)}
              className="border-gray-300 focus:border-primary"
            />
          </div>
          
          <div>
            <Input
              placeholder="Destination"
              value={formData.destination}
              onChange={(e) => handleInputChange('destination', e.target.value)}
              className="border-gray-300 focus:border-primary"
            />
          </div>
          
          <div>
            <Select onValueChange={(value) => handleInputChange('type', value)}>
              <SelectTrigger className="border-gray-300 focus:border-primary">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent className="bg-white z-50">
                <SelectItem value="ftl">Full Truckload (FTL)</SelectItem>
                <SelectItem value="ltl">Less Than Truckload (LTL)</SelectItem>
                <SelectItem value="expedited">Expedited</SelectItem>
                <SelectItem value="cross-border">Cross-Border</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Input
              placeholder="Weight (kg)"
              value={formData.weight}
              onChange={(e) => handleInputChange('weight', e.target.value)}
              className="border-gray-300 focus:border-primary"
            />
          </div>
          
          <div>
            <Input
              placeholder="Dimensions (L x W x H)"
              value={formData.dimensions}
              onChange={(e) => handleInputChange('dimensions', e.target.value)}
              className="border-gray-300 focus:border-primary"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary-600 text-white font-medium py-3 rounded-lg"
          >
            Calculate
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default QuoteForm;
