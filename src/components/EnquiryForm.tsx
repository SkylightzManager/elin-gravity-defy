import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface EnquiryFormProps {
  subject?: string;
  showChildrenCount?: boolean;
  showEmail?: boolean;
  showCompany?: boolean;
  showGroupSize?: boolean;
  showDate?: boolean;
}

const EnquiryForm = ({ 
  subject = "Class Enquiry",
  showChildrenCount = false,
  showEmail = false,
  showCompany = false,
  showGroupSize = false,
  showDate = false
}: EnquiryFormProps) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Enquire With Us!</h2>
          <form
            action="https://formsubmit.co/enquiry@elindance.com.sg"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value={subject} />
            
            <div>
              <Input name="name" placeholder={showChildrenCount ? "Parent Name" : "Name"} required className="bg-card" />
            </div>
            
            {showEmail && (
              <div>
                <Input name="email" type="email" placeholder="Email" required className="bg-card" />
              </div>
            )}
            
            <div>
              <select 
                name="time_slot" 
                className="w-full h-10 px-3 rounded-md border border-input bg-card text-foreground"
                required
              >
                <option value="">Preferred Time Slot</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </select>
            </div>
            
            <div>
              <Input name="phone" type="tel" placeholder="Phone" required className="bg-card" />
            </div>
            
            {showChildrenCount && (
              <div>
                <Input name="children_count" type="number" placeholder="Number of Children" min="1" required className="bg-card" />
              </div>
            )}
            
            {showCompany && (
              <div>
                <Input name="company" placeholder="Company" required className="bg-card" />
              </div>
            )}
            
            {showGroupSize && (
              <div>
                <Input name="group_size" type="number" placeholder="Group Size" min="1" required className="bg-card" />
              </div>
            )}
            
            {showDate && (
              <div>
                <Input name="preferred_date" type="date" required className="bg-card" />
              </div>
            )}
            
            <div>
              <p className="text-sm font-medium mb-3">Choose your preferred Days *Required</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {days.map((day) => (
                  <label key={day} className="flex items-center gap-2 cursor-pointer">
                    <Checkbox name="days" value={day} />
                    <span className="text-sm">{day}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <Button type="submit" className="w-full bg-gradient-cyan hover:glow-cyan text-white font-semibold">
              Send
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
