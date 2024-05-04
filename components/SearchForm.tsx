'use client'

import { useRouter } from "next/navigation";
import { ControllerFieldState, ControllerRenderProps, UseFormStateReturn, useForm } from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ReactElement, JSXElementConstructor } from "react";
import { BedDoubleIcon, CalendarIcon } from "lucide-react";
import { format } from "date-fns"
import { cn } from '@/lib/utils';
import { Calendar } from "./ui/calendar";


export const formSchema = z.object({
    location: z.string().min(2).max(50),
    destination: z.string().min(2).max(50),
    dates: z.object({
        from: z.date(),
        to: z.date(),
    }),
    adults: z.string().min(1, {message: "Please select a least one adult",    
    }).max(12, { message: "Max 12 adults Occupancy"}),
    children: z.string().min(0).max(12, { message: "Max 12 children Occupancy",    
    }), 
    rooms: z.string().min(1, {
        message: "Please select at least 1 room",
    }),
});

function SearchForm() {

    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({    //the form will be extracting data from the formschema
        resolver: zodResolver(formSchema),
        defaultValues: {                 ////  similar to useState values
            location: "",
            destination: "",
            dates: {
                from: undefined,
                to: undefined,
            },
            adults: "1",
            children: "0",
            rooms: "1",
        },
    });


    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
         const checkin_monthday = values.dates.from.getDate().toString();
         const checkin_month = (values.dates.from.getMonth() + 1).toString();
         const checkin_year = values.dates.from.getFullYear().toString();
         const checkout_monthday = values.dates.to.getDate().toString();
         const checkout_month = (values.dates.to.getDate() + 1).toString();
         const checkout_year = values.dates.to.getFullYear().toString();

         const checkin = `${checkin_year}-${checkin_month}-${checkin_monthday}`;
         const checkout = `${checkout_year}-${checkout_month}-${checkout_monthday}`;

        //  https://www.jetblue.com/booking/flights?from=FLL&to=LAS&depart=2024-07-23&return=2024-07-30
        // &isMultiCity=false&noOfRoute=1&lang=en&adults=3&children=0&infants=0&sharedMarket=false&roundTripFaresFlag=false&usePoints=false

         const url = new URL("https://www.jetblue.com/booking/flights")
         url.searchParams.set("from", values.location);
         url.searchParams.set("to", values.destination);
         url.searchParams.set("adults", values.adults);
         url.searchParams.set("children", values.children)
         url.searchParams.set("depart", checkin);
         url.searchParams.set("return", checkout);

         router.push(`/search?url=${url.href}`);
         
    }


  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col bg-[#01205B] lg:flex-row lg:max-w-7xl lg:mx-auto item-center justify-center
        space-x-0 lg:space-x-2 space-y-4 lg:space-y-0 rounded-lg">
            <div className="grid w-full lg:mx-w-sm items-center gap-1.5">
                <FormField 
                      control={form.control}
                      name= "location"
                      render={({field}) => (
                        <FormItem>
                            <FormLabel className="text-white flex">
                                <BedDoubleIcon  className="ml-2 h-4 w-4 text-white"/>
                            </FormLabel>

                            <FormMessage />

                            <FormControl>
                                <Input placeholder="Where Are You? London, UK" {...field}/>
                            </FormControl>
                        </FormItem>
                      )} />
            </div>
            <div className="grid w-full lg:mx-w-sm items-center gap-1.5">
                <FormField 
                      control={form.control}
                      name= "destination"
                      render={({field}) => (
                        <FormItem>
                            <FormLabel className="text-white flex">
                                <BedDoubleIcon  className="ml-2 h-4 w-4 text-white"/>
                            </FormLabel>

                            <FormMessage />

                            <FormControl>
                                <Input placeholder="Where To? Tulum, Mexico" {...field}/>
                            </FormControl>
                        </FormItem>
                      )} />
            </div>
            <div className="grid w-full lg:max-w-sm flex-1item-center gap-1.5">
                    <FormField 
                    control={form.control}
                    name='dates'
                    render={({field}) => (
                        <FormItem className="flex flex-col">
                            <FormLabel className="text-white">Dates</FormLabel>
                            <FormMessage/>
                            <Popover>
                                <PopoverTrigger asChild className="bg-white">
                                    <FormControl className="bg-white">
                                        <Button
                                        id="date"
                                        name="date"
                                        variant={"outline"}
                                        className={cn(
                                            "w-full justify-start text-left font-normal",
                                            !field.value.from && "text-muted-foreground"
                                        )}>
                                        <CalendarIcon className="mr-3 h-4 w-4 opacity-50"/>
                                        {field.value?.from ? (
                                            field.value?.to ? (
                                            <>
                                                {format(field.value?.from, "LL-dd-y")} -{" "}
                                                {format(field.value?.to, "LL-dd-y")}
                                            </>
                                            ) : (
                                                format(field.value?.from, "LLL dd, y")
                                            )
                                        ) : (
                                            <span>Select A Date</span>
                                        )}

                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0 bg-white" align="start">
                                    <Calendar initialFocus mode="range" selected={field.value} defaultMonth={field.value.from}
                                     onSelect={field.onChange} numberOfMonths={2} disabled={(date) => 
                                        date < new Date(new Date().setHours(0, 0, 0, 0))
                                     }/>
                                </PopoverContent>
                            </Popover>
                        </FormItem>
                    )} />
            </div>
        <div className="flex w-full items-center space-x-2">
            <div className="grid items-center flex-1">
                <FormField
                 control={form.control}
                 name="adults"
                 render={({field}) => (
                    <FormItem className="flex flex-col">
                        <FormLabel className="text-white">
                            Adults
                        </FormLabel>
                        <FormMessage/>
                        <FormControl>
                            <Input type="number" placeholder="Adults" {...field} />
                        </FormControl>
                    </FormItem>
                 )} />
            </div>
            <div className="grid items-center flex-1">
                <FormField
                 control={form.control}
                 name="children"
                 render={({field}) => (
                    <FormItem className="flex flex-col">
                        <FormLabel className="text-white">
                            Children
                        </FormLabel>
                        <FormMessage/>
                        <FormControl>
                            <Input type="number" placeholder="Children" {...field} />
                        </FormControl>
                    </FormItem>
                 )} />
            </div>
            <div className="grid items-center flex-1">
                <FormField
                 control={form.control}
                 name="rooms"
                 render={({field}) => (
                    <FormItem className="flex flex-col">
                        <FormLabel className="text-white">
                            Rooms
                        </FormLabel>
                        <FormMessage/>
                        <FormControl>
                            <Input type="number" placeholder="Rooms" {...field} />
                        </FormControl>
                    </FormItem>
                 )} />
            </div>
            <div className="mt-auto">
                <Button type="submit" className="bg-[#5B9FC1]" text-base>Search</Button>
            </div>
        </div>
        </form>
    </Form>
  )
}

export default SearchForm