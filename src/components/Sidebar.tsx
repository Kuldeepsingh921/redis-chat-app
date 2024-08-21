import React from 'react'
import { ScrollArea } from './ui/scroll-area';
import { USERS } from '@/db/dummy';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { LogOut } from 'lucide-react';
interface SidebarProps{
    isCollapsed:boolean;
}
const Sidebar = ({isCollapsed}:SidebarProps) => {
    const selectedUser=USERS[0]
    console.log(selectedUser,"selectedUser")
  return (
    <div className='group relative flex flex-col h-full gap-4 p-2 data-[collapsed=true]:p-2 max-h-full overflow-auto bg-background'>
        {!isCollapsed && (
            <div className='flex justify-between p-2 items-center'>
                <div className='flex gap-2 items-center text-2xl'>
                    <p className='font-medium'>Chats</p>
                </div>
            </div>
        )}
<ScrollArea className='gap-2 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2' >
    {USERS?.map((user,id)=>(
        isCollapsed?(
            <TooltipProvider key={id}>
                <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                        <div>
                            <Avatar className='my-1 justify-center items-center'>
                                <AvatarImage
                                src={user.image || "/user-placeholder.png"}
                                alt='User Image'
                                className='w-10 h-10 rounded-full border-white border-2'
                                />
                                <AvatarFallback>{user.name[0]}</AvatarFallback>
                              

                            </Avatar>
                            <span className='sr-only'>{user.name}</span>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent side='right' className='items-center flex gap-4'>{user.name}</TooltipContent>
                </Tooltip>
            </TooltipProvider>
        ):(
            <Button key={id} variant='grey' size={'xl'} className={cn("w-full justify-start gap-4 my-1",

                selectedUser.email===user.email && 'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white shrink'
            )}>
 <Avatar className='my-1 justify-center items-center'>
                                <AvatarImage
                                src={user.image || "/user-placeholder.png"}
                                alt='User Image'
                                className='w-10 h-10'
                                />
                                <AvatarFallback>{user.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className='flex flex-col max-w-28'>{user.name}</div>
            </Button>
        )
    )

    )}
</ScrollArea>
{/* Log Out Section */}
<div className='mt-auto'>
    <div className='flex justify-between items-center gap-2 md:px-6 py-2'>
        {!isCollapsed && (
            <div className='hidden md:flex gap-2 items-center'>
<Avatar className='flex  justify-center items-center'>
                                <AvatarImage
                                src={"/user-placeholder.png"}
                                alt='User Image'
                                referrerPolicy='no-referrer'
                                className='w-8 h-8 border-white rounded-full'
                                />
                               <p className='font-bold'>John Doe</p>
                            </Avatar>
            </div>
        )}
<div className='flex'>
    <LogOut size={24} cursor={'pointer'} />
</div>
    </div>

</div>
    </div>
  )
}

export default Sidebar