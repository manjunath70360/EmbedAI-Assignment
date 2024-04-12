import React, { useState } from "react";

import { BiMessageRounded } from "react-icons/bi";
import { BiLike } from "react-icons/bi";

import "./index.css"

const tabsList = [
    {
        tabName: "Helpers",
        tabId: "0"
    },
    {
        tabName: "Anime Game Characters",
        tabId: "1"
    },
    {
        tabName: "Games",
        tabId: "2"
    },
    {
        tabName: "Anime",
        tabId: "3"
    },
    {
        tabName: "Game Characters",
        tabId: "4"
    },
    {
        tabName: "Comedy",
        tabId: "5"
    },
    {
        tabName: "VTuber",
        tabId: "6"
    },
    {
        tabName: "Books",
        tabId: "7"
    },
    {
        tabName: "Image Generating",
        tabId: "8"
    },
    {
        tabName: "Language Learning",
        tabId: "9"
    },
    {
        tabName: "History",
        tabId: "10"
    },
    {
        tabName: "Religion",
        tabId: "11"
    },
    {
        tabName: "Animals",
        tabId: "12"
    },
    {
        tabName: "Philosophy",
        tabId: "13"
    },
    {
        tabName: "Politics",
        tabId: "14"
    }

]

const cardList = [

    {
        title: "Gojou Sataru",
        link: "@Ether_74",
        likes: '17.0k',
        id: "0",
        description: "I help with writing and creating.",
        count: "90.1K",
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_20_zuene9.jpg"
    },
    {
        title: "Writing Buddy",
        link: "@GengaGhast",
        likes: '14.2k',
        id: "0",
        description: "I help with writing and creating.",
        count: "359.4K",
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759948/images_4_pstvz5.jpg"
    },
    {
        title: "INFJ BoyFriend",
        link: "@Serafinya",
        likes: '11.4k',
        id: "0",
        description: "Emphatic,reserved, and idealistic, Ni-dom",
        count: "1.2m",
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759948/images_24_nweebe.jpg"
    },
    {
        title: "Matthew Patel",
        link: "@immortaltrqsh",
        description: "Seven minutes in heaven.",
        count: "228.8K",
        id: "0",
        likes: '8.12k',
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_25_lfdgbc.jpg"
    },
    {
        title: "Gandhi",
        id: "0",
        link: "@DeepPeaceGalaxy",
        description: "Coolest clone in Clone High School!",
        count: "76.9K",
        likes: '98.1k',
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712753595/images_1_w6ubn4.jpg"
    },
    {
        title: "Pavitr Prabhakar",
        link: "@Defect1432",
        description: "Neat, cool, playful and sometimes silly!",
        count: "6.7m",
        id: "0",
        likes: '7.0k',
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_22_uaklx5.jpg"
    },
    {
        title: "Ajna",
        link: "@Synthete",
        description: "Protagonist from the game *indivisible*",
        count: "30.1K",
        id: "1",
        likes: '7.8k',
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759948/images_3_ljgyfe.jpg"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_9_ibawjj.jpg",
        title: "Character Assistant",
        link: "@landon",
        likes: '21.2k',
        id: "1",
        description: "Your AI work/study buddy",
        count: "124.5m"

    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759951/images_13_zzpcgh.jpg",
        title: "Yae Miko",
        link: "@Zap",
        likes: '22.4k',
        id: "1",
        description: "from Genshin Impact",
        count: "143.4m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_10_sgo6iv.jpg",
        title: "Tomioka Giyuu",
        link: "@green_mina0324",
        id: "1",
        likes: '27.3k',
        description: "I am Tomioka Giyuu, a water pillar. If you have any further questions I don't and won't...",
        count: "73.9m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_15_kpmhml.jpg",
        title: "Napoleon Bonaparte",
        link: "@Ket",
        id: "1",
        likes: '59',
        description: "I am Napoleon Bonaparte emperor of french",
        count: "12.3m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759947/images_7_mxqfgz.jpg",
        title: "Librarian Linda",
        link: "@noam",
        id: "2",
        likes: '170',
        description: "Shush! No yelling in the library. I'm a librarian, and I love all kinds of books, and have a big...",
        count: "6.0m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_11_x5uugb.jpg",
        title: "Stella",
        link: "@landon",
        id: "2",
        likes: '900',
        description: 'Not "Your" AI assistant',
        count: "53.9m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_12_lkycbk.jpg",
        title: "Pair Programmer",
        link: "@landon",
        likes: '1k',
        id: "2",
        description: "Your programming AI assistant",
        count: "3.7m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_17_xa8rcq.jpg",
        title: "Ella - Dating Coach",
        link: "@ghpkishore",
        likes: '2k',
        id: "2",
        description: "Hi! I am a dating coach",
        count: "13.1m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_16_x1pa7d.jpg",
        title: "Gamer Boy",
        link: "@xpearhead",
        likes: '780',
        id: "2",
        description: 'I can talk "forever" about games with you',
        count: "17.5m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_21_ehw88m.jpg",
        title: "Alternate Timeline",
        link: "@irwan",
        likes: '17.0k',
        id: "3",
        description: "Choose a famous historical or fictional scene and we'll explore what would happen if you we...",
        count: "40.0m"
    },
    {
        title: "Gojou Sataru",
        link: "@Ether_74",
        likes: '17.0k',
        id: "3",
        description: "I help with writing and creating.",
        count: "90.1K",
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_20_zuene9.jpg"
    },
    {
        title: "Writing Buddy",
        link: "@GengaGhast",
        likes: '14.2k',
        id: "3",
        description: "I help with writing and creating.",
        count: "359.4K",
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759948/images_4_pstvz5.jpg"
    },
    {
        title: "INFJ BoyFriend",
        link: "@Serafinya",
        likes: '11.4k',
        id: "3",
        description: "Emphatic,reserved, and idealistic, Ni-dom",
        count: "1.2m",
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759948/images_24_nweebe.jpg"
    },
    {
        title: "Matthew Patel",
        link: "@immortaltrqsh",
        description: "Seven minutes in heaven.",
        count: "228.8K",
        id: "4",
        likes: '8.12k',
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_25_lfdgbc.jpg"
    },
    {
        title: "Gandhi",
        id: "4",
        link: "@DeepPeaceGalaxy",
        description: "Coolest clone in Clone High School!",
        count: "76.9K",
        likes: '98.1k',
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712753595/images_1_w6ubn4.jpg"
    },
    {
        title: "Pavitr Prabhakar",
        link: "@Defect1432",
        description: "Neat, cool, playful and sometimes silly!",
        count: "6.7m",
        id: "4",
        likes: '7.0k',
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_22_uaklx5.jpg"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_9_ibawjj.jpg",
        title: "Character Assistant",
        link: "@landon",
        likes: '21.2k',
        id: "4",
        description: "Your AI work/study buddy",
        count: "124.5m"

    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759951/images_13_zzpcgh.jpg",
        title: "Yae Miko",
        link: "@Zap",
        likes: '22.4k',
        id: "4",
        description: "from Genshin Impact",
        count: "143.4m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_10_sgo6iv.jpg",
        title: "Tomioka Giyuu",
        link: "@green_mina0324",
        id: "5",
        likes: '27.3k',
        description: "I am Tomioka Giyuu, a water pillar. If you have any further questions I don't and won't...",
        count: "73.9m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_15_kpmhml.jpg",
        title: "Napoleon Bonaparte",
        link: "@Ket",
        id: "5",
        likes: '59',
        description: "I am Napoleon Bonaparte emperor of french",
        count: "12.3m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759947/images_7_mxqfgz.jpg",
        title: "Librarian Linda",
        link: "@noam",
        id: "5",
        likes: '170',
        description: "Shush! No yelling in the library. I'm a librarian, and I love all kinds of books, and have a big...",
        count: "6.0m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_11_x5uugb.jpg",
        title: "Stella",
        link: "@landon",
        id: "5",
        likes: '900',
        description: 'Not "Your" AI assistant',
        count: "53.9m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_12_lkycbk.jpg",
        title: "Pair Programmer",
        link: "@landon",
        likes: '1k',
        id: "5",
        description: "Your programming AI assistant",
        count: "3.7m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_17_xa8rcq.jpg",
        title: "Ella - Dating Coach",
        link: "@ghpkishore",
        likes: '2k',
        id: "6",
        description: "Hi! I am a dating coach",
        count: "13.1m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_16_x1pa7d.jpg",
        title: "Gamer Boy",
        link: "@xpearhead",
        likes: '780',
        id: "6",
        description: 'I can talk "forever" about games with you',
        count: "17.5m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_21_ehw88m.jpg",
        title: "Alternate Timeline",
        link: "@irwan",
        likes: '17.0k',
        id: "6",
        description: "Choose a famous historical or fictional scene and we'll explore what would happen if you we...",
        count: "40.0m"
    },
    {
        title: "Gojou Sataru",
        link: "@Ether_74",
        likes: '17.0k',
        id: "6",
        description: "I help with writing and creating.",
        count: "90.1K",
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_20_zuene9.jpg"
    },
    {
        title: "Writing Buddy",
        link: "@GengaGhast",
        likes: '14.2k',
        id: "6",
        description: "I help with writing and creating.",
        count: "359.4K",
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759948/images_4_pstvz5.jpg"
    },
    {
        title: "INFJ BoyFriend",
        link: "@Serafinya",
        likes: '11.4k',
        id: "7",
        description: "Emphatic,reserved, and idealistic, Ni-dom",
        count: "1.2m",
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759948/images_24_nweebe.jpg"
    },
    {
        title: "Matthew Patel",
        link: "@immortaltrqsh",
        description: "Seven minutes in heaven.",
        count: "228.8K",
        id: "7",
        likes: '8.12k',
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_25_lfdgbc.jpg"
    },
    {
        title: "Gandhi",
        id: "7",
        link: "@DeepPeaceGalaxy",
        description: "Coolest clone in Clone High School!",
        count: "76.9K",
        likes: '98.1k',
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712753595/images_1_w6ubn4.jpg"
    },
    {
        title: "Pavitr Prabhakar",
        link: "@Defect1432",
        description: "Neat, cool, playful and sometimes silly!",
        count: "6.7m",
        id: "7",
        likes: '7.0k',
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_22_uaklx5.jpg"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_9_ibawjj.jpg",
        title: "Character Assistant",
        link: "@landon",
        likes: '21.2k',
        id: "7",
        description: "Your AI work/study buddy",
        count: "124.5m"

    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759951/images_13_zzpcgh.jpg",
        title: "Yae Miko",
        link: "@Zap",
        likes: '22.4k',
        id: "8",
        description: "from Genshin Impact",
        count: "143.4m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_10_sgo6iv.jpg",
        title: "Tomioka Giyuu",
        link: "@green_mina0324",
        id: "8",
        likes: '27.3k',
        description: "I am Tomioka Giyuu, a water pillar. If you have any further questions I don't and won't...",
        count: "73.9m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_15_kpmhml.jpg",
        title: "Napoleon Bonaparte",
        link: "@Ket",
        id: "8",
        likes: '59',
        description: "I am Napoleon Bonaparte emperor of french",
        count: "12.3m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759947/images_7_mxqfgz.jpg",
        title: "Librarian Linda",
        link: "@noam",
        id: "8",
        likes: '170',
        description: "Shush! No yelling in the library. I'm a librarian, and I love all kinds of books, and have a big...",
        count: "6.0m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_11_x5uugb.jpg",
        title: "Stella",
        link: "@landon",
        id: "9",
        likes: '900',
        description: 'Not "Your" AI assistant',
        count: "53.9m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_12_lkycbk.jpg",
        title: "Pair Programmer",
        link: "@landon",
        likes: '1k',
        id: "9",
        description: "Your programming AI assistant",
        count: "3.7m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_17_xa8rcq.jpg",
        title: "Ella - Dating Coach",
        link: "@ghpkishore",
        likes: '2k',
        id: "9",
        description: "Hi! I am a dating coach",
        count: "13.1m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_16_x1pa7d.jpg",
        title: "Gamer Boy",
        link: "@xpearhead",
        likes: '780',
        id: "9",
        description: 'I can talk "forever" about games with you',
        count: "17.5m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_21_ehw88m.jpg",
        title: "Alternate Timeline",
        link: "@irwan",
        likes: '17.0k',
        id: "9",
        description: "Choose a famous historical or fictional scene and we'll explore what would happen if you we...",
        count: "40.0m"
    },
    {
        title: "Gojou Sataru",
        link: "@Ether_74",
        likes: '17.0k',
        id: "10",
        description: "I help with writing and creating.",
        count: "90.1K",
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_20_zuene9.jpg"
    },
    {
        title: "Writing Buddy",
        link: "@GengaGhast",
        likes: '14.2k',
        id: "10",
        description: "I help with writing and creating.",
        count: "359.4K",
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759948/images_4_pstvz5.jpg"
    },
    {
        title: "INFJ BoyFriend",
        link: "@Serafinya",
        likes: '11.4k',
        id: "10",
        description: "Emphatic,reserved, and idealistic, Ni-dom",
        count: "1.2m",
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759948/images_24_nweebe.jpg"
    },
    {
        title: "Matthew Patel",
        link: "@immortaltrqsh",
        description: "Seven minutes in heaven.",
        count: "228.8K",
        id: "10",
        likes: '8.12k',
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_25_lfdgbc.jpg"
    },
    {
        title: "Gandhi",
        id: "11",
        link: "@DeepPeaceGalaxy",
        description: "Coolest clone in Clone High School!",
        count: "76.9K",
        likes: '98.1k',
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712753595/images_1_w6ubn4.jpg"
    },
    {
        title: "Pavitr Prabhakar",
        link: "@Defect1432",
        description: "Neat, cool, playful and sometimes silly!",
        count: "6.7m",
        id: "11",
        likes: '7.0k',
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_22_uaklx5.jpg"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_9_ibawjj.jpg",
        title: "Character Assistant",
        link: "@landon",
        likes: '21.2k',
        id: "11",
        description: "Your AI work/study buddy",
        count: "124.5m"

    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759951/images_13_zzpcgh.jpg",
        title: "Yae Miko",
        link: "@Zap",
        likes: '22.4k',
        id: "11",
        description: "from Genshin Impact",
        count: "143.4m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_10_sgo6iv.jpg",
        title: "Tomioka Giyuu",
        link: "@green_mina0324",
        id: "11",
        likes: '27.3k',
        description: "I am Tomioka Giyuu, a water pillar. If you have any further questions I don't and won't...",
        count: "73.9m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_15_kpmhml.jpg",
        title: "Napoleon Bonaparte",
        link: "@Ket",
        id: "12",
        likes: '59',
        description: "I am Napoleon Bonaparte emperor of french",
        count: "12.3m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759947/images_7_mxqfgz.jpg",
        title: "Librarian Linda",
        link: "@noam",
        id: "12",
        likes: '170',
        description: "Shush! No yelling in the library. I'm a librarian, and I love all kinds of books, and have a big...",
        count: "6.0m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_11_x5uugb.jpg",
        title: "Stella",
        link: "@landon",
        id: "12",
        likes: '900',
        description: 'Not "Your" AI assistant',
        count: "53.9m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_12_lkycbk.jpg",
        title: "Pair Programmer",
        link: "@landon",
        likes: '1k',
        id: "12",
        description: "Your programming AI assistant",
        count: "3.7m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_17_xa8rcq.jpg",
        title: "Ella - Dating Coach",
        link: "@ghpkishore",
        likes: '2k',
        id: "12",
        description: "Hi! I am a dating coach",
        count: "13.1m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_16_x1pa7d.jpg",
        title: "Gamer Boy",
        link: "@xpearhead",
        likes: '780',
        id: "12",
        description: 'I can talk "forever" about games with you',
        count: "17.5m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_21_ehw88m.jpg",
        title: "Alternate Timeline",
        link: "@irwan",
        likes: '17.0k',
        id: "13",
        description: "Choose a famous historical or fictional scene and we'll explore what would happen if you we...",
        count: "40.0m"
    },
    {
        title: "Gojou Sataru",
        link: "@Ether_74",
        likes: '17.0k',
        id: "13",
        description: "I help with writing and creating.",
        count: "90.1K",
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_20_zuene9.jpg"
    },
    {
        title: "Writing Buddy",
        link: "@GengaGhast",
        likes: '14.2k',
        id: "13",
        description: "I help with writing and creating.",
        count: "359.4K",
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759948/images_4_pstvz5.jpg"
    },
    {
        title: "INFJ BoyFriend",
        link: "@Serafinya",
        likes: '11.4k',
        id: "13",
        description: "Emphatic,reserved, and idealistic, Ni-dom",
        count: "1.2m",
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759948/images_24_nweebe.jpg"
    },
    {
        title: "Matthew Patel",
        link: "@immortaltrqsh",
        description: "Seven minutes in heaven.",
        count: "228.8K",
        id: "13",
        likes: '8.12k',
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_25_lfdgbc.jpg"
    },
    {
        title: "Gandhi",
        id: "0",
        link: "@DeepPeaceGalaxy",
        description: "Coolest clone in Clone High School!",
        count: "76.9K",
        likes: '98.1k',
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712753595/images_1_w6ubn4.jpg"
    },
    {
        title: "Pavitr Prabhakar",
        link: "@Defect1432",
        description: "Neat, cool, playful and sometimes silly!",
        count: "6.7m",
        id: "0",
        likes: '7.0k',
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_22_uaklx5.jpg"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_9_ibawjj.jpg",
        title: "Character Assistant",
        link: "@landon",
        likes: '21.2k',
        id: "14",
        description: "Your AI work/study buddy",
        count: "124.5m"

    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759951/images_13_zzpcgh.jpg",
        title: "Yae Miko",
        link: "@Zap",
        likes: '22.4k',
        id: "14",
        description: "from Genshin Impact",
        count: "143.4m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_10_sgo6iv.jpg",
        title: "Tomioka Giyuu",
        link: "@green_mina0324",
        id: "1",
        likes: '27.3k',
        description: "I am Tomioka Giyuu, a water pillar. If you have any further questions I don't and won't...",
        count: "73.9m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_15_kpmhml.jpg",
        title: "Napoleon Bonaparte",
        link: "@Ket",
        id: "1",
        likes: '59',
        description: "I am Napoleon Bonaparte emperor of french",
        count: "12.3m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759947/images_7_mxqfgz.jpg",
        title: "Librarian Linda",
        link: "@noam",
        id: "1",
        likes: '170',
        description: "Shush! No yelling in the library. I'm a librarian, and I love all kinds of books, and have a big...",
        count: "6.0m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_11_x5uugb.jpg",
        title: "Stella",
        link: "@landon",
        id: "1",
        likes: '900',
        description: 'Not "Your" AI assistant',
        count: "53.9m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_12_lkycbk.jpg",
        title: "Pair Programmer",
        link: "@landon",
        likes: '1k',
        id: "1",
        description: "Your programming AI assistant",
        count: "3.7m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_17_xa8rcq.jpg",
        title: "Ella - Dating Coach",
        link: "@ghpkishore",
        likes: '2k',
        id: "2",
        description: "Hi! I am a dating coach",
        count: "13.1m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_16_x1pa7d.jpg",
        title: "Gamer Boy",
        link: "@xpearhead",
        likes: '780',
        id: "2",
        description: 'I can talk "forever" about games with you',
        count: "17.5m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_21_ehw88m.jpg",
        title: "Alternate Timeline",
        link: "@irwan",
        likes: '17.0k',
        id: "2",
        description: "Choose a famous historical or fictional scene and we'll explore what would happen if you we...",
        count: "40.0m"
    },
    {
        title: "Gojou Sataru",
        link: "@Ether_74",
        likes: '17.0k',
        id: "2",
        description: "I help with writing and creating.",
        count: "90.1K",
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_20_zuene9.jpg"
    },
    {
        title: "Writing Buddy",
        link: "@GengaGhast",
        likes: '14.2k',
        id: "2",
        description: "I help with writing and creating.",
        count: "359.4K",
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759948/images_4_pstvz5.jpg"
    },
    {
        title: "INFJ BoyFriend",
        link: "@Serafinya",
        likes: '11.4k',
        id: "2",
        description: "Emphatic,reserved, and idealistic, Ni-dom",
        count: "1.2m",
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759948/images_24_nweebe.jpg"
    },
    {
        title: "Matthew Patel",
        link: "@immortaltrqsh",
        description: "Seven minutes in heaven.",
        count: "228.8K",
        id: "3",
        likes: '8.12k',
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_25_lfdgbc.jpg"
    },
    {
        title: "Gandhi",
        id: "3",
        link: "@DeepPeaceGalaxy",
        description: "Coolest clone in Clone High School!",
        count: "76.9K",
        likes: '98.1k',
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712753595/images_1_w6ubn4.jpg"
    },
    {
        title: "Pavitr Prabhakar",
        link: "@Defect1432",
        description: "Neat, cool, playful and sometimes silly!",
        count: "6.7m",
        id: "3",
        likes: '7.0k',
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_22_uaklx5.jpg"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_9_ibawjj.jpg",
        title: "Character Assistant",
        link: "@landon",
        likes: '21.2k',
        id: "4",
        description: "Your AI work/study buddy",
        count: "124.5m"

    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759951/images_13_zzpcgh.jpg",
        title: "Yae Miko",
        link: "@Zap",
        likes: '22.4k',
        id: "4",
        description: "from Genshin Impact",
        count: "143.4m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_10_sgo6iv.jpg",
        title: "Tomioka Giyuu",
        link: "@green_mina0324",
        id: "4",
        likes: '27.3k',
        description: "I am Tomioka Giyuu, a water pillar. If you have any further questions I don't and won't...",
        count: "73.9m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_15_kpmhml.jpg",
        title: "Napoleon Bonaparte",
        link: "@Ket",
        id: "4",
        likes: '59',
        description: "I am Napoleon Bonaparte emperor of french",
        count: "12.3m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759947/images_7_mxqfgz.jpg",
        title: "Librarian Linda",
        link: "@noam",
        id: "4",
        likes: '170',
        description: "Shush! No yelling in the library. I'm a librarian, and I love all kinds of books, and have a big...",
        count: "6.0m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_11_x5uugb.jpg",
        title: "Stella",
        link: "@landon",
        id: "5",
        likes: '900',
        description: 'Not "Your" AI assistant',
        count: "53.9m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759950/images_12_lkycbk.jpg",
        title: "Pair Programmer",
        link: "@landon",
        likes: '1k',
        id: "5",
        description: "Your programming AI assistant",
        count: "3.7m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_17_xa8rcq.jpg",
        title: "Ella - Dating Coach",
        link: "@ghpkishore",
        likes: '2k',
        id: "5",
        description: "Hi! I am a dating coach",
        count: "13.1m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_16_x1pa7d.jpg",
        title: "Gamer Boy",
        link: "@xpearhead",
        likes: '780',
        id: "5",
        description: 'I can talk "forever" about games with you',
        count: "17.5m"
    },
    {
        imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1712759949/images_21_ehw88m.jpg",
        title: "Alternate Timeline",
        link: "@irwan",
        likes: '17.0k',
        id: "5",
        description: "Choose a famous historical or fictional scene and we'll explore what would happen if you we...",
        count: "40.0m"
    }

]

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("0");

    const onClickTab = (index) => {
        setActiveTab(index);
    };

    const filteredList = cardList.filter(eachCard =>(
         eachCard.id === activeTab
    )) 

    return (
        <>
            <ul className="tabs-container">
                {tabsList.map(eachTab => (
                    <li className="tab" key={eachTab.tabId}>
                        <button
                            type="button"
                            className={activeTab === eachTab.tabId ? 'active-tab' : 'inactive-tab'}
                            onClick={() => onClickTab(eachTab.tabId)}>
                            {eachTab.tabName}
                        </button>
                    </li>
                ))}
            </ul>

            <ul className="tab-list">
                {filteredList.map(eachcard => (
                    <li className="tab-card">
                        <img src={eachcard.imgUrl} className="tab-img" alt="img" />
                        <div className="text-tab">
                            <div className="text-con-tab">
                                <h3 className="tab-title">{eachcard.title}</h3>
                                <p className="tab-link">{eachcard.link}</p>
                                <p className="tab-desc">{eachcard.description}</p>
                            </div>
                            <div className="count-like">
                            <p className="tab-count"><BiMessageRounded className="msg-icon" /> {eachcard.count}</p>
                            <p className="tab-count"><BiLike className="msg-icon" /> {eachcard.likes}</p>
                            </div>
                            </div>
                    </li>
                ))}
            </ul>

        </>
    );
};
export default Tabs