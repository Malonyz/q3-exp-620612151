import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
export function StudentInfo() {
  return (
    // Use Drawer component to display student information
    <div className="flex-1 p-4">
      
    

    <Drawer swipeDirection="left">
      <DrawerTrigger render={<Button variant="secondary">Tunyasopark Saowapark</Button>} />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle>
          <DrawerDescription>Student Information</DrawerDescription>


        </DrawerHeader>
        
          
          <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src="src/assets/TT.jpeg"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        
        <CardTitle>Tunyasopark Saowapark</CardTitle>
        <CardDescription>
          นักศึกษาประจำภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่
          <Badge variant="secondary">CPE207</Badge>
          
        </CardDescription>
      <CardTitle> Major: Computer Engineering </CardTitle>
      <CardTitle> Email: tunyasopark.saowapark@cmu.ac.th </CardTitle>
        
      </CardHeader>
      <CardFooter>
        <CardTitle><Badge variant="secondary">Student ID: 620612151</Badge></CardTitle>
      </CardFooter>
    </Card>
              
        <DrawerFooter>
          
          <DrawerClose render={<Button>Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
    
  </div>
  );
}



