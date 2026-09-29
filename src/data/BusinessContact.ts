export const businessContact = {
   phoneDisplay: "+1 732-790-7530",
   phoneHref: "tel:+17327907530",
   email: "mbuniversalhome@gmail.com",
   emailHref: "mailto:mbuniversalhome@gmail.com",
   whatsapp: "https://wa.me/17327907530",
   facebook: "https://www.facebook.com/profile.php?id=61591580935760",
   instagram: "https://www.instagram.com/mbuniversalhome/",
   tiktok: "https://www.tiktok.com/@mb.universal.home",
} as const

export const businessSocials = [
   { name: "Facebook", href: businessContact.facebook, icon: "fab fa-facebook-f" },
   { name: "Instagram", href: businessContact.instagram, icon: "fab fa-instagram" },
   { name: "TikTok", href: businessContact.tiktok, icon: "fab fa-tiktok" },
   { name: "WhatsApp", href: businessContact.whatsapp, icon: "fab fa-whatsapp" },
] as const
