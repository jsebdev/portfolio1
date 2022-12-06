const bioText = `
Hi! I'm Sebastian Caicedo, a curious and ever-learning software developer from Colombia. 👋

I'm passionate about developing good quality software and finding the most optime solutions to all kinds of problems.

I'm obsessed with front-end and back-end development, particularly javascript and python frameworks like React, React-native, Nextjs, and Django. 💻

I've worked as a full-stack developer in the fintech and pharmaceutical industry developing graphical features, restful and graphQl APIs, WhatsApp chatbots, and web scraping.  📈

I consider myself a black hole of information <I mean, I like learning new things a lot>, so when I'm not working, I usually watch videos or tutorials, learn a new language, or work on a side project to expand my skills. Also, now and then, I do virtual math lessons. 🤓

Oh Right! I was born in Cali! So I sure love to dance salsa and move the body! 💃🏼


`

export const bioParagraphs = bioText.split('\n').filter(x => x.trim().length > 0)