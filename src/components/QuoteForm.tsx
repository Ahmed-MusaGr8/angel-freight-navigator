
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Navigation, Package, Weight, Ruler, Loader2 } from 'lucide-react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    from: '',
    destination: '',
    type: '',
    weight: '',
    dimensions: '',
    serviceType: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [quote, setQuote] = useState<number | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.from.trim()) newErrors.from = 'Origin is required';
    if (!formData.destination.trim()) newErrors.destination = 'Destination is required';
    if (!formData.type) newErrors.type = 'Service type is required';
    if (!formData.weight.trim()) newErrors.weight = 'Weight is required';
    if (!formData.dimensions.trim()) newErrors.dimensions = 'Dimensions are required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateQuote = () => {
    const weight = parseFloat(formData.weight) || 0;
    const baseCost = weight * 2.5; // $2.5 per kg base rate
    
    const typeMultipliers: Record<string, number> = {
      'ftl': 1.5,
      'ltl': 1.0,
      'expedited': 2.0,
      'cross-border': 1.8
    };
    
    const multiplier = typeMultipliers[formData.type] || 1.0;
    return Math.round(baseCost * multiplier + 150); // Add base handling fee
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please fill in all required fields",
        description: "All fields are required to calculate your quote.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    setQuote(null);
    
    console.log('Quote calculation started:', formData);
    
    // Simulate API call with 10-second delay
    setTimeout(() => {
      const calculatedQuote = calculateQuote();
      setQuote(calculatedQuote);
      setIsLoading(false);
      
      toast({
        title: "Quote Calculated!",
        description: `Your estimated shipping cost is $${calculatedQuote}. This is a preliminary estimate.`,
      });
    }, 10000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <Card className="w-full bg-white shadow-xl border-0 rounded-2xl">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-navy-900">
          Calculate your shipment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="From *"
              value={formData.from}
              onChange={(e) => handleInputChange('from', e.target.value)}
              className={`pl-10 border-gray-300 focus:border-primary rounded-xl ${
                errors.from ? 'border-red-500' : ''
              }`}
              required
            />
            {errors.from && <p className="text-red-500 text-sm mt-1">{errors.from}</p>}
          </div>
          
          <div className="relative">
            <Navigation className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Destination *"
              value={formData.destination}
              onChange={(e) => handleInputChange('destination', e.target.value)}
              className={`pl-10 border-gray-300 focus:border-primary rounded-xl ${
                errors.destination ? 'border-red-500' : ''
              }`}
              required
            />
            {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination}</p>}
          </div>
          
          <div className="relative">
            <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
            <Select onValueChange={(value) => handleInputChange('type', value)} required>
              <SelectTrigger className={`pl-10 border-gray-300 focus:border-primary rounded-xl ${
                errors.type ? 'border-red-500' : ''
              }`}>
                <SelectValue placeholder="Type *" />
              </SelectTrigger>
              <SelectContent className="bg-white z-50 rounded-xl">
                <SelectItem value="ftl">Full Truckload (FTL)</SelectItem>
                <SelectItem value="ltl">Less Than Truckload (LTL)</SelectItem>
                <SelectItem value="expedited">Expedited</SelectItem>
                <SelectItem value="cross-border">Cross-Border</SelectItem>
              </SelectContent>
            </Select>
            {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
          </div>
          
          <div className="relative">
            <Weight className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Weight (kg) *"
              value={formData.weight}
              onChange={(e) => handleInputChange('weight', e.target.value)}
              className={`pl-10 border-gray-300 focus:border-primary rounded-xl ${
                errors.weight ? 'border-red-500' : ''
              }`}
              type="number"
              required
            />
            {errors.weight && <p className="text-red-500 text-sm mt-1">{errors.weight}</p>}
          </div>
          
          <div className="relative">
            <Ruler className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Dimensions (L x W x H) *"
              value={formData.dimensions}
              onChange={(e) => handleInputChange('dimensions', e.target.value)}
              className={`pl-10 border-gray-300 focus:border-primary rounded-xl ${
                errors.dimensions ? 'border-red-500' : ''
              }`}
              required
            />
            {errors.dimensions && <p className="text-red-500 text-sm mt-1">{errors.dimensions}</p>}
          </div>
          
          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary-600 text-white font-medium py-3 rounded-xl disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Calculating...
              </>
            ) : (
              'Calculate'
            )}
          </Button>

          {quote && !isLoading && (
            <div className="mt-4 p-4 bg-primary-50 rounded-xl border border-primary-200">
              <h3 className="font-semibold text-primary mb-2">Your Estimated Quote</h3>
              <div className="text-2xl font-bold text-navy-900">${quote}</div>
              <p className="text-sm text-gray-600 mt-1">
                This is a preliminary estimate. Final pricing may vary based on specific requirements.
              </p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default QuoteForm;
