import HandsomeManImg from "../../../../../assets/images/mail/Handsome_Man.png";
import { uuid } from "../../../../../common/uuid";

export const MAILS_LIST = [
    {
        id: uuid(),
        senderImg: HandsomeManImg,
        senderName: "Saad AIT YAHIA",
        from: "saadaityahia455@gmail.com",
        subject: "Windows Portfolio",
        content:
            `Hello there!\n\n` +
            `I hope this message finds you well. I wanted to extend my heartfelt gratitude for taking the time to explore my website. Your interest means a lot to me, and I hope you found the content engaging and informative.\n\n` +
            `If you have any questions, feedback, or just want to chat about the projects you saw, please don't hesitate to reach out. I'm always excited to connect with visitors like you and discuss how we can collaborate or how I can assist you further.\n\n` +
            `Feel free to reply to this email, and let's start a conversation. Your thoughts and ideas are valuable to me, and I'm eager to hear from you.\n\n` +
            `Thank you once again for your visit. Looking forward to staying in touch!\n\n` +
            `Best regards,\n\n` +
            `Saad AIT YAHIA`,
        disabledReply: false,
    },
];
