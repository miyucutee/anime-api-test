import type { APIRoute } from "astro";

export const get: APIRoute = async function get({ request, params }) {
    return {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify([
            {
                "name": "Airi",
                "fullName": "Airi Kurimura",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/9/96/Airi.png/266px-Airi.png",
                "school": "Trinity",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/9c/Trinity.png/50px-Trinity.png"
            },
            {
                "name": "Akane",
                "fullName": "Akane Murokasa",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/a/aa/Akane.png/266px-Akane.png",
                "school": "Millennium",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/2/2a/Millennium.png/50px-Millennium.png"
            },
            {
                "name": "Akari",
                "fullName": "Akari Wanibuchi",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/7/7d/Akari.png/266px-Akari.png",
                "school": "Gehenna",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png"
            },
            {
                "name": "Ako",
                "fullName": "Ako Amau",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/7/72/Ako.png/266px-Ako.png",
                "school": "Gehenna",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png"
            },
            {
                "name": "Arisu",
                "fullName": "Arisu Tendou",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/0/0f/Arisu.png/266px-Arisu.png",
                "school": "Millennium",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/2/2a/Millennium.png/50px-Millennium.png"
            },
            {
                "name": "Aru",
                "fullName": "Aru Rikuhachima",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/d/db/Aru.png/266px-Aru.png",
                "school": "Gehenna",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png"
            },
            {
                "name": "Aru (New Year)",
                "fullName": "Aru (New Year) Rikuhachima",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/6/60/Aru_%28New_Year%29.png/266px-Aru_%28New_Year%29.png",
                "school": "Gehenna",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png"
            },
            {
                "name": "Asuna",
                "fullName": "Asuna Ichinose",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/9/9f/Asuna.png/266px-Asuna.png",
                "school": "Millennium",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/2/2a/Millennium.png/50px-Millennium.png"
            },
            {
                "name": "Asuna (Bunny Girl)",
                "fullName": "Asuna (Bunny Girl) Ichinose",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/a/a4/Asuna_%28Bunny_Girl%29.png/266px-Asuna_%28Bunny_Girl%29.png",
                "school": "Millennium",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/2/2a/Millennium.png/50px-Millennium.png"
            },
            {
                "name": "Atsuko",
                "fullName": "Atsuko Hakari",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/c/c7/Atsuko.png/266px-Atsuko.png",
                "school": "Arius",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/93/Arius.png/50px-Arius.png"
            },
            {
                "name": "Ayane",
                "fullName": "Ayane Okusora",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/a/a7/Ayane.png/266px-Ayane.png",
                "school": "Abydos",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/91/Abydos.png/50px-Abydos.png"
            },
            {
                "name": "Ayane (Swimsuit)",
                "fullName": "Ayane (Swimsuit) Okusora",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/f/f6/Ayane_%28Swimsuit%29.png/266px-Ayane_%28Swimsuit%29.png",
                "school": "Abydos",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/91/Abydos.png/50px-Abydos.png"
            },
            {
                "name": "Azusa",
                "fullName": "Azusa Shirasu",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/8/86/Azusa.png/266px-Azusa.png",
                "school": "Trinity",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/9c/Trinity.png/50px-Trinity.png"
            },
            {
                "name": "Azusa (Swimsuit)",
                "fullName": "Azusa (Swimsuit) Shirasu",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/a/a4/Azusa_%28Swimsuit%29.png/266px-Azusa_%28Swimsuit%29.png",
                "school": "Trinity",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/9c/Trinity.png/50px-Trinity.png"
            },
            {
                "name": "Cherino",
                "fullName": "Cherino Renkawa",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/7/7c/Cherino.png/266px-Cherino.png",
                "school": "Red Winter",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/8/8b/Red_Winter.png/50px-Red_Winter.png"
            },
            {
                "name": "Cherino (Hot Spring)",
                "fullName": "Cherino (Hot Spring) Renkawa",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/9/95/Cherino_%28Hot_Spring%29.png/266px-Cherino_%28Hot_Spring%29.png",
                "school": "Red Winter",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/8/8b/Red_Winter.png/50px-Red_Winter.png"
            },
            {
                "name": "Chihiro",
                "fullName": "Chihiro Kagami",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/a/a7/Chihiro.png/266px-Chihiro.png",
                "school": "Millennium",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/2/2a/Millennium.png/50px-Millennium.png"
            },
            {
                "name": "Chinatsu",
                "fullName": "Chinatsu Hinomiya",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/b/b6/Chinatsu.png/266px-Chinatsu.png",
                "school": "Gehenna",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png"
            },
            {
                "name": "Chinatsu (Hot Spring)",
                "fullName": "Chinatsu (Hot Spring) Hinomiya",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/b/b1/Chinatsu_%28Hot_Spring%29.png/266px-Chinatsu_%28Hot_Spring%29.png",
                "school": "Gehenna",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png"
            },
            {
                "name": "Chise",
                "fullName": "Chise Waraku",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/d/d0/Chise.png/266px-Chise.png",
                "school": "Hyakkiyako",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/3/36/Hyakkiyako.png/50px-Hyakkiyako.png"
            },
            {
                "name": "Chise (Swimsuit)",
                "fullName": "Chise (Swimsuit) Waraku",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/1/1e/Chise_%28Swimsuit%29.png/266px-Chise_%28Swimsuit%29.png",
                "school": "Hyakkiyako",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/3/36/Hyakkiyako.png/50px-Hyakkiyako.png"
            },
            {
                "name": "Eimi",
                "fullName": "Eimi Izumimoto",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/e/ed/Eimi.png/266px-Eimi.png",
                "school": "Millennium",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/2/2a/Millennium.png/50px-Millennium.png"
            },
            {
                "name": "Fubuki",
                "fullName": "Fubuki Nemugaki",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/c/cd/Fubuki.png/266px-Fubuki.png",
                "school": "Valkyrie",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/d/d5/Valkyrie.png/50px-Valkyrie.png"
            },
            {
                "name": "Fuuka",
                "fullName": "Fuuka Aikiyo",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/1/1f/Fuuka.png/266px-Fuuka.png",
                "school": "Gehenna",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png"
            },
            {
                "name": "Hanae",
                "fullName": "Hanae Asagao",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/7/72/Hanae.png/266px-Hanae.png",
                "school": "Trinity",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/9c/Trinity.png/50px-Trinity.png"
            },
            {
                "name": "Hanako",
                "fullName": "Hanako Urawa",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/9/9c/Hanako.png/266px-Hanako.png",
                "school": "Trinity",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/9c/Trinity.png/50px-Trinity.png"
            },
            {
                "name": "Hare",
                "fullName": "Hare Omagari",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/4/47/Hare.png/266px-Hare.png",
                "school": "Millennium",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/2/2a/Millennium.png/50px-Millennium.png"
            },
            {
                "name": "Haruka",
                "fullName": "Haruka Igusa",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/b/b1/Haruka.png/266px-Haruka.png",
                "school": "Gehenna",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png"
            },
            {
                "name": "Haruna",
                "fullName": "Haruna Kurodate",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/a/a6/Haruna.png/266px-Haruna.png",
                "school": "Gehenna",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png"
            },
            {
                "name": "Hasumi",
                "fullName": "Hasumi Hanekawa",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/8/84/Hasumi.png/266px-Hasumi.png",
                "school": "Trinity",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/9c/Trinity.png/50px-Trinity.png"
            },
            {
                "name": "Hatsune Miku",
                "fullName": "Hatsune Miku Hatsune",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/9/93/Hatsune_Miku.png/266px-Hatsune_Miku.png",
                "school": "Other",
                "imageSchool": "https:undefined"
            },
            {
                "name": "Hibiki",
                "fullName": "Hibiki Nekozuka",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/b/bc/Hibiki.png/266px-Hibiki.png",
                "school": "Millennium",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/2/2a/Millennium.png/50px-Millennium.png"
            },
            {
                "name": "Hibiki (Cheerleader)",
                "fullName": "Hibiki (Cheerleader) Nekozuka",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/b/bf/Hibiki_%28Cheerleader%29.png/266px-Hibiki_%28Cheerleader%29.png",
                "school": "Millennium",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/2/2a/Millennium.png/50px-Millennium.png"
            },
            {
                "name": "Hifumi",
                "fullName": "Hifumi Ajitani",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/3/3b/Hifumi.png/266px-Hifumi.png",
                "school": "Trinity",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/9c/Trinity.png/50px-Trinity.png"
            },
            {
                "name": "Hifumi (Swimsuit)",
                "fullName": "Hifumi (Swimsuit) Ajitani",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/3/32/Hifumi_%28Swimsuit%29.png/266px-Hifumi_%28Swimsuit%29.png",
                "school": "Trinity",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/9c/Trinity.png/50px-Trinity.png"
            },
            {
                "name": "Hina",
                "fullName": "Hina Sorasaki",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/8/83/Hina.png/266px-Hina.png",
                "school": "Gehenna",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png"
            },
            {
                "name": "Hina (Swimsuit)",
                "fullName": "Hina (Swimsuit) Sorasaki",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/4/44/Hina_%28Swimsuit%29.png/266px-Hina_%28Swimsuit%29.png",
                "school": "Gehenna",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png"
            },
            {
                "name": "Hinata",
                "fullName": "Hinata Wakaba",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/9/97/Hinata.png/266px-Hinata.png",
                "school": "Trinity",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/9c/Trinity.png/50px-Trinity.png"
            },
            {
                "name": "Hiyori",
                "fullName": "Hiyori Tsuchinaga",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/7/76/Hiyori.png/266px-Hiyori.png",
                "school": "Arius",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/93/Arius.png/50px-Arius.png"
            },
            {
                "name": "Hoshino",
                "fullName": "Hoshino Takanashi",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/a/a9/Hoshino.png/266px-Hoshino.png",
                "school": "Abydos",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/91/Abydos.png/50px-Abydos.png"
            },
            {
                "name": "Hoshino (Swimsuit)",
                "fullName": "Hoshino (Swimsuit) Takanashi",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/c/c2/Hoshino_%28Swimsuit%29.png/266px-Hoshino_%28Swimsuit%29.png",
                "school": "Abydos",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/91/Abydos.png/50px-Abydos.png"
            },
            {
                "name": "Iori",
                "fullName": "Iori Shiromi",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/2/26/Iori.png/266px-Iori.png",
                "school": "Gehenna",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png"
            },
            {
                "name": "Iori (Swimsuit)",
                "fullName": "Iori (Swimsuit) Shiromi",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/5/53/Iori_%28Swimsuit%29.png/266px-Iori_%28Swimsuit%29.png",
                "school": "Gehenna",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png"
            },
            {
                "name": "Iroha",
                "fullName": "Iroha Natsume",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/b/bf/Iroha.png/266px-Iroha.png",
                "school": "Gehenna",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png"
            },
            {
                "name": "Izumi",
                "fullName": "Izumi Shishidō",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/1/10/Izumi.png/266px-Izumi.png",
                "school": "Gehenna",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png"
            },
            {
                "name": "Izumi (Swimsuit)",
                "fullName": "Izumi (Swimsuit) Shishidō",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/b/b0/Izumi_%28Swimsuit%29.png/266px-Izumi_%28Swimsuit%29.png",
                "school": "Gehenna",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png"
            },
            {
                "name": "Izuna",
                "fullName": "Izuna Kuda",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/5/54/Izuna.png/266px-Izuna.png",
                "school": "Hyakkiyako",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/3/36/Hyakkiyako.png/50px-Hyakkiyako.png"
            },
            {
                "name": "Izuna (Swimsuit)",
                "fullName": "Izuna (Swimsuit) Kuda",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/3/37/Izuna_%28Swimsuit%29.png/266px-Izuna_%28Swimsuit%29.png",
                "school": "Hyakkiyako",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/3/36/Hyakkiyako.png/50px-Hyakkiyako.png"
            },
            {
                "name": "Junko",
                "fullName": "Junko Akashi",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/3/3c/Junko.png/266px-Junko.png",
                "school": "Gehenna",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png"
            },
            {
                "name": "Juri",
                "fullName": "Juri Ushimaki",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/3/37/Juri.png/266px-Juri.png",
                "school": "Gehenna",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png"
            },
            {
                "name": "Kaede",
                "fullName": "Kaede Isami",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/f/f0/Kaede.png/266px-Kaede.png",
                "school": "Hyakkiyako",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/3/36/Hyakkiyako.png/50px-Hyakkiyako.png"
            },
            {
                "name": "Karin",
                "fullName": "Karin Kakudate",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/5/50/Karin.png/266px-Karin.png",
                "school": "Millennium",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/2/2a/Millennium.png/50px-Millennium.png"
            },
            {
                "name": "Karin (Bunny Girl)",
                "fullName": "Karin (Bunny Girl) Kakudate",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Karin_%28Bunny_Girl%29.png/266px-Karin_%28Bunny_Girl%29.png",
                "school": "Millennium",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/2/2a/Millennium.png/50px-Millennium.png"
            },
            {
                "name": "Kayoko",
                "fullName": "Kayoko Onikata",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/a/a5/Kayoko.png/266px-Kayoko.png",
                "school": "Gehenna",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png"
            },
            {
                "name": "Kazusa",
                "fullName": "Kazusa Kyoyama",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/b/b3/Kazusa.png/266px-Kazusa.png",
                "school": "Trinity",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/9c/Trinity.png/50px-Trinity.png"
            },
            {
                "name": "Kirino",
                "fullName": "Kirino Nakatsukasa",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/8/85/Kirino.png/266px-Kirino.png",
                "school": "Valkyrie",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/d/d5/Valkyrie.png/50px-Valkyrie.png"
            },
            {
                "name": "Koharu",
                "fullName": "Koharu Shimoe",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/c/c3/Koharu.png/266px-Koharu.png",
                "school": "Trinity",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/9c/Trinity.png/50px-Trinity.png"
            },
            {
                "name": "Kokona",
                "fullName": "Kokona Sunohara",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/8/83/Kokona.png/266px-Kokona.png",
                "school": "Shanhaijing",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/be/Shanhaijing.png/50px-Shanhaijing.png"
            },
            {
                "name": "Kotama",
                "fullName": "Kotama Otose",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/9/94/Kotama.png/266px-Kotama.png",
                "school": "Millennium",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/2/2a/Millennium.png/50px-Millennium.png"
            },
            {
                "name": "Kotori",
                "fullName": "Kotori Toyomi",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/a/ab/Kotori.png/266px-Kotori.png",
                "school": "Millennium",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/2/2a/Millennium.png/50px-Millennium.png"
            },
            {
                "name": "Maki",
                "fullName": "Maki Konuri",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/2/21/Maki.png/266px-Maki.png",
                "school": "Millennium",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/2/2a/Millennium.png/50px-Millennium.png"
            },
            {
                "name": "Mari",
                "fullName": "Mari Iochi",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/4/4f/Mari.png/266px-Mari.png",
                "school": "Trinity",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/9c/Trinity.png/50px-Trinity.png"
            },
            {
                "name": "Marina",
                "fullName": "Marina Ikekura",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/9/9d/Marina.png/266px-Marina.png",
                "school": "Red Winter",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/8/8b/Red_Winter.png/50px-Red_Winter.png"
            },
            {
                "name": "Mashiro",
                "fullName": "Mashiro Shizuyama",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/0/06/Mashiro.png/266px-Mashiro.png",
                "school": "Trinity",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/9c/Trinity.png/50px-Trinity.png"
            },
            {
                "name": "Mashiro (Swimsuit)",
                "fullName": "Mashiro (Swimsuit) Shizuyama",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/2/20/Mashiro_%28Swimsuit%29.png/266px-Mashiro_%28Swimsuit%29.png",
                "school": "Trinity",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/9c/Trinity.png/50px-Trinity.png"
            },
            {
                "name": "Michiru",
                "fullName": "Michiru Chidori",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/e/e6/Michiru.png/266px-Michiru.png",
                "school": "Hyakkiyako",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/3/36/Hyakkiyako.png/50px-Hyakkiyako.png"
            },
            {
                "name": "Midori",
                "fullName": "Midori Saiba",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/e/ee/Midori.png/266px-Midori.png",
                "school": "Millennium",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/2/2a/Millennium.png/50px-Millennium.png"
            },
            {
                "name": "Mimori",
                "fullName": "Mimori Mizuha",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/8/82/Mimori.png/266px-Mimori.png",
                "school": "Hyakkiyako",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/3/36/Hyakkiyako.png/50px-Hyakkiyako.png"
            },
            {
                "name": "Misaki",
                "fullName": "Misaki Imashino",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/a/ae/Misaki.png/266px-Misaki.png",
                "school": "Arius",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/93/Arius.png/50px-Arius.png"
            },
            {
                "name": "Miyako",
                "fullName": "Miyako Tsukiyuki",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/3/3e/Miyako.png/266px-Miyako.png",
                "school": "SRT",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/5/5a/SRT.png/50px-SRT.png"
            },
            {
                "name": "Miyu",
                "fullName": "Miyu Kasumizawa",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/a/ac/Miyu.png/266px-Miyu.png",
                "school": "SRT",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/5/5a/SRT.png/50px-SRT.png"
            },
            {
                "name": "Moe",
                "fullName": "Moe Kazekura",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/c/cc/Moe.png/266px-Moe.png",
                "school": "SRT",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/5/5a/SRT.png/50px-SRT.png"
            },
            {
                "name": "Momoi",
                "fullName": "Momoi Saiba",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/1/18/Momoi.png/266px-Momoi.png",
                "school": "Millennium",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/2/2a/Millennium.png/50px-Millennium.png"
            },
            {
                "name": "Mutsuki",
                "fullName": "Mutsuki Asagi",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/0/0b/Mutsuki.png/266px-Mutsuki.png",
                "school": "Gehenna",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png"
            },
            {
                "name": "Mutsuki (New Year)",
                "fullName": "Mutsuki (New Year) Asagi",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/c/c2/Mutsuki_%28New_Year%29.png/266px-Mutsuki_%28New_Year%29.png",
                "school": "Gehenna",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png"
            },
            {
                "name": "Natsu",
                "fullName": "Natsu Yutori",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/9/90/Natsu.png/266px-Natsu.png",
                "school": "Trinity",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/9c/Trinity.png/50px-Trinity.png"
            },
            {
                "name": "Neru",
                "fullName": "Neru Mikamo",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/2/24/Neru.png/266px-Neru.png",
                "school": "Millennium",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/2/2a/Millennium.png/50px-Millennium.png"
            },
            {
                "name": "Neru (Bunny Girl)",
                "fullName": "Neru (Bunny Girl) Mikamo",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/7/78/Neru_%28Bunny_Girl%29.png/266px-Neru_%28Bunny_Girl%29.png",
                "school": "Millennium",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/2/2a/Millennium.png/50px-Millennium.png"
            },
            {
                "name": "Noa",
                "fullName": "Noa Ushio",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/2/23/Noa.png/266px-Noa.png",
                "school": "Millennium",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/2/2a/Millennium.png/50px-Millennium.png"
            },
            {
                "name": "Nodoka",
                "fullName": "Nodoka Amami",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/e/e1/Nodoka.png/266px-Nodoka.png",
                "school": "Red Winter",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/8/8b/Red_Winter.png/50px-Red_Winter.png"
            },
            {
                "name": "Nodoka (Hot Spring)",
                "fullName": "Nodoka (Hot Spring) Amami",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/3/3f/Nodoka_%28Hot_Spring%29.png/266px-Nodoka_%28Hot_Spring%29.png",
                "school": "Red Winter",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/8/8b/Red_Winter.png/50px-Red_Winter.png"
            },
            {
                "name": "Nonomi",
                "fullName": "Nonomi Izayoi",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/a/ad/Nonomi.png/266px-Nonomi.png",
                "school": "Abydos",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/91/Abydos.png/50px-Abydos.png"
            },
            {
                "name": "Nonomi (Swimsuit)",
                "fullName": "Nonomi (Swimsuit) Izayoi",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/9/98/Nonomi_%28Swimsuit%29.png/266px-Nonomi_%28Swimsuit%29.png",
                "school": "Abydos",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/91/Abydos.png/50px-Abydos.png"
            },
            {
                "name": "Pina",
                "fullName": "Pina Asahina",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/9/96/Pina.png/266px-Pina.png",
                "school": "Hyakkiyako",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/3/36/Hyakkiyako.png/50px-Hyakkiyako.png"
            },
            {
                "name": "Saki",
                "fullName": "Saki Sorai",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/d/d0/Saki.png/266px-Saki.png",
                "school": "SRT",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/5/5a/SRT.png/50px-SRT.png"
            },
            {
                "name": "Saori",
                "fullName": "Saori Jomae",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/4/46/Saori.png/266px-Saori.png",
                "school": "Arius",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/93/Arius.png/50px-Arius.png"
            },
            {
                "name": "Saya",
                "fullName": "Saya Yakushi",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/c/ce/Saya.png/266px-Saya.png",
                "school": "Shanhaijing",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/be/Shanhaijing.png/50px-Shanhaijing.png"
            },
            {
                "name": "Saya (Casual)",
                "fullName": "Saya (Casual) Yakushi",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/e/e2/Saya_%28Casual%29.png/266px-Saya_%28Casual%29.png",
                "school": "Shanhaijing",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/be/Shanhaijing.png/50px-Shanhaijing.png"
            },
            {
                "name": "Sena",
                "fullName": "Sena Himuro",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/f/f4/Sena.png/266px-Sena.png",
                "school": "Gehenna",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png"
            },
            {
                "name": "Serika",
                "fullName": "Serika Kuromi",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/c/c8/Serika.png/266px-Serika.png",
                "school": "Abydos",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/91/Abydos.png/50px-Abydos.png"
            },
            {
                "name": "Serika (New Year)",
                "fullName": "Serika (New Year) Kuromi",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/6/61/Serika_%28New_Year%29.png/266px-Serika_%28New_Year%29.png",
                "school": "Abydos",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/91/Abydos.png/50px-Abydos.png"
            },
            {
                "name": "Serina",
                "fullName": "Serina Sumi",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/4/41/Serina.png/266px-Serina.png",
                "school": "Trinity",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/9c/Trinity.png/50px-Trinity.png"
            },
            {
                "name": "Shimiko",
                "fullName": "Shimiko Endō",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/f/f4/Shimiko.png/266px-Shimiko.png",
                "school": "Trinity",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/9c/Trinity.png/50px-Trinity.png"
            },
            {
                "name": "Shiroko",
                "fullName": "Shiroko Sunaōkami",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/6/63/Shiroko.png/266px-Shiroko.png",
                "school": "Abydos",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/91/Abydos.png/50px-Abydos.png"
            },
            {
                "name": "Shiroko (Riding)",
                "fullName": "Shiroko (Riding) Sunaōkami",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/a/a0/Shiroko_%28Riding%29.png/266px-Shiroko_%28Riding%29.png",
                "school": "Abydos",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/91/Abydos.png/50px-Abydos.png"
            },
            {
                "name": "Shizuko",
                "fullName": "Shizuko Kawawa",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/7/77/Shizuko.png/266px-Shizuko.png",
                "school": "Hyakkiyako",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/3/36/Hyakkiyako.png/50px-Hyakkiyako.png"
            },
            {
                "name": "Shizuko (Swimsuit)",
                "fullName": "Shizuko (Swimsuit) Kawawa",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/f/f2/Shizuko_%28Swimsuit%29.png/266px-Shizuko_%28Swimsuit%29.png",
                "school": "Hyakkiyako",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/3/36/Hyakkiyako.png/50px-Hyakkiyako.png"
            },
            {
                "name": "Shun",
                "fullName": "Shun Sunohara",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/1/17/Shun.png/266px-Shun.png",
                "school": "Shanhaijing",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/be/Shanhaijing.png/50px-Shanhaijing.png"
            },
            {
                "name": "Shun (Kid)",
                "fullName": "Shun (Kid) Sunohara",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/5/53/Shun_%28Kid%29.png/266px-Shun_%28Kid%29.png",
                "school": "Shanhaijing",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/b/be/Shanhaijing.png/50px-Shanhaijing.png"
            },
            {
                "name": "Sumire",
                "fullName": "Sumire Otohana",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/d/d6/Sumire.png/266px-Sumire.png",
                "school": "Millennium",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/2/2a/Millennium.png/50px-Millennium.png"
            },
            {
                "name": "Suzumi",
                "fullName": "Suzumi Morizuki",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/0/07/Suzumi.png/266px-Suzumi.png",
                "school": "Trinity",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/9c/Trinity.png/50px-Trinity.png"
            },
            {
                "name": "Tomoe",
                "fullName": "Tomoe Sashiro",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/0/0a/Tomoe.png/266px-Tomoe.png",
                "school": "Red Winter",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/8/8b/Red_Winter.png/50px-Red_Winter.png"
            },
            {
                "name": "Tsubaki",
                "fullName": "Tsubaki Kasuga",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/6/6a/Tsubaki.png/266px-Tsubaki.png",
                "school": "Hyakkiyako",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/3/36/Hyakkiyako.png/50px-Hyakkiyako.png"
            },
            {
                "name": "Tsukuyo",
                "fullName": "Tsukuyo Ōno",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/c/ce/Tsukuyo.png/266px-Tsukuyo.png",
                "school": "Hyakkiyako",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/3/36/Hyakkiyako.png/50px-Hyakkiyako.png"
            },
            {
                "name": "Tsurugi",
                "fullName": "Tsurugi Kenzaki",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/c/c1/Tsurugi.png/266px-Tsurugi.png",
                "school": "Trinity",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/9c/Trinity.png/50px-Trinity.png"
            },
            {
                "name": "Tsurugi (Swimsuit)",
                "fullName": "Tsurugi (Swimsuit) Kenzaki",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/e/e6/Tsurugi_%28Swimsuit%29.png/266px-Tsurugi_%28Swimsuit%29.png",
                "school": "Trinity",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/9c/Trinity.png/50px-Trinity.png"
            },
            {
                "name": "Ui",
                "fullName": "Ui Kozeki",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/1/18/Ui.png/266px-Ui.png",
                "school": "Trinity",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/9c/Trinity.png/50px-Trinity.png"
            },
            {
                "name": "Utaha",
                "fullName": "Utaha Shiraishi",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/3/37/Utaha.png/266px-Utaha.png",
                "school": "Millennium",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/2/2a/Millennium.png/50px-Millennium.png"
            },
            {
                "name": "Utaha (Cheerleader)",
                "fullName": "Utaha (Cheerleader) Shiraishi",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/7/7b/Utaha_%28Cheerleader%29.png/266px-Utaha_%28Cheerleader%29.png",
                "school": "Millennium",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/2/2a/Millennium.png/50px-Millennium.png"
            },
            {
                "name": "Wakamo",
                "fullName": "Wakamo Kosaka",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/a/a7/Wakamo.png/266px-Wakamo.png",
                "school": "Hyakkiyako",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/3/36/Hyakkiyako.png/50px-Hyakkiyako.png"
            },
            {
                "name": "Wakamo (Swimsuit)",
                "fullName": "Wakamo (Swimsuit) Kosaka",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/e/e2/Wakamo_%28Swimsuit%29.png/266px-Wakamo_%28Swimsuit%29.png",
                "school": "Hyakkiyako",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/3/36/Hyakkiyako.png/50px-Hyakkiyako.png"
            },
            {
                "name": "Yoshimi",
                "fullName": "Yoshimi Ibaraki",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/c/c2/Yoshimi.png/266px-Yoshimi.png",
                "school": "Trinity",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/9/9c/Trinity.png/50px-Trinity.png"
            },
            {
                "name": "Yuuka",
                "fullName": "Yuuka Hayase",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/3/3e/Yuuka.png/266px-Yuuka.png",
                "school": "Millennium",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/2/2a/Millennium.png/50px-Millennium.png"
            },
            {
                "name": "Yuzu",
                "fullName": "Yuzu Hanaoka",
                "photoUrl": "https://static.miraheze.org/bluearchivewiki/thumb/7/71/Yuzu.png/266px-Yuzu.png",
                "school": "Millennium",
                "imageSchool": "https://static.miraheze.org/bluearchivewiki/thumb/2/2a/Millennium.png/50px-Millennium.png"
            }
        ])
    };
}