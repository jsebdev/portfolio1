const bioText = `
Hi! I'm Sebastian Caicedo, a curious and ever-learning ML developer from Colombia. 👋

From regressions, and predictions to unsupervised, and reinforcement learning...
Data is my passion!! 📊 Especially when it comes to
uncovering insights from complex datasets. 🤖 

I started my career as a full-stack developer, but I quickly realized what I am most passionate about when I started 
doing data science projects for fun. 📈

My goal is to become a use my skills on projects that help people and the environment. 🌎

I consider myself a black hole of information,
so when I'm not working, I'm usually watching educative videos, learning a new language, or working
on a side project to expand my skills. Also, now and then, I do math and coding lessons. 🤓

Oh Right! and I was born in Cali! So I'm a salsa dancer 💃 (at least in the shower), and I'm a ping-pong player at night 🏓.
`

export const bioParagraphs = bioText.split('\n\n').map(x => x.replace('\n', ' ')).filter(x => x.trim().length > 0)