"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { MoonIcon, SunIcon, Volume2, VolumeX } from 'lucide-react'
import { useTheme } from 'next-themes'
import { usePreferences } from '@/store/usePreferences'
import {useSound} from 'use-sound'

const PreferencesTab = () => {
    const {setTheme} = useTheme()
    const [selectedTheme, setSelectedTheme] = useState<string>('dark'); // Initialize with an empty string or a default theme

    const handleTheme = (theme: string) => {
      setSelectedTheme(theme);
      setTheme(theme);
    };
    const { soundEnabled,setSoundEnabled } =usePreferences()
    const [playMouseClick]=useSound('/sounds/mouse-click.mp3')
    const [playSoundOn]=useSound('/sounds/sound-on.mp3',{volume:0.2})
    const [playSoundOff]=useSound('/sounds/sound-off.mp3',{volume:0.2})

    return (
    <div className='flex flex-wrap gap-2 px-1 md:px-2 mt-5 justify-center items-center'>
 <Button variant='outline' size='icon' onClick={() =>{ handleTheme(selectedTheme === 'dark' ? 'light' : 'dark'); playMouseClick() } }>
        {selectedTheme === 'dark' ? (
            <SunIcon className='size-[1.2rem] text-muted-foreground' />
        ) : (
            <MoonIcon className='size-[1.2rem] text-muted-foreground' />
        )}
      </Button>

<Button variant={'outline'} size={'icon'} onClick={()=>{setSoundEnabled(!soundEnabled)
  soundEnabled? playSoundOff():playSoundOn()
}}>
    {soundEnabled ? (<Volume2 className='size-[1.2rem] text-muted-foreground' />):(<VolumeX className='size-[1.2rem] text-muted-foreground' />)}
    
</Button>
    </div>
  )
}

export default PreferencesTab