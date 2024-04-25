'use client'

import { useRouter } from "next/navigation";
import { ControllerFieldState, ControllerRenderProps, UseFormStateReturn, useForm } from "react-hook-form";
import * as z from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ReactElement, JSXElementConstructor } from "react";
import { BedDoubleIcon } from "lucide-react";


export const formSchema = z.object({
    location: z.string().min(2).max(50),
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

    }


  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col bg-[purple] lg:flex-row lg:max-w-6xl lg:mx-auto item-center justify-center
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
                                <Input placeholder="London, UK" {...field}/>
                            </FormControl>
                        </FormItem>
                      )} />
            </div>
        </form>
    </Form>
  )
}

export default SearchForm