  import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
export function DatePickerDemo({selectedOption} : any) {
  const [date, setDate] = React.useState<Date>();
  console.log("selectedOption",date);
  

  return (
    <Popover>
      <PopoverTrigger asChild>
        
        <Button disabled={selectedOption !== "date"}
          className={cn(
            "w-[280px] justify-start bg-slate-100 hover:bg-white text-black text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-black" />
          {date ? format(date, "PPP") : <span className="text-black">Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
