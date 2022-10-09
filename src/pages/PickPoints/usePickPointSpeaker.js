import { useSpeechSynthesis } from "react-speech-kit"

export function usePickPointSpeaker() {
    
    const { speak, speaking, cancel, voices, supported } = useSpeechSynthesis()

    const getPickPointInfo = (pp) => {
        return `Вы выбрали пункт самовывоза по адресу: ${pp.address}. 
        В этом пункте доступны следующие услуги: ${pp.budgets.join(',')}`
    }
    
    const speakPickPoint = (pp) => {
        
        if(supported) {
            let rusVoice
            if(speaking) {
                cancel()
            }
            if(voices.length) {
                rusVoice = voices.find(v => v.lang.indexOf('ru') === 0)
            }

            let text = getPickPointInfo(pp)

            rusVoice ? speak({text: text, voice: rusVoice}) : speak({text: text})
        }
    }
  
    return speakPickPoint;
}