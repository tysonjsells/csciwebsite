export default function Home() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>Tyson Sells</h1>
          </div>
          <img
            className='pic'
            src='https://freeskier.com/wp-content/uploads/2019/08/Freeskier_BestofV21_3_HP.jpg'
            alt='freeskier'
          />

          <p className='description'>
            Hi! I'm Tyson. I was born in Fort Collins where both of my parents went to college and eventually met.
            I was raised in the southern suburbs of Denver and eventually graduated from Cherry Creek High School.
            Currently, I am a second year undergrad student at the University of Colorado, Boulder and I am pursuing
            a future in Computer Science. Some of my skills and tools include proficiency in C++ and Python, team management,
            leadership, problem solving, carpentry, and maths. Some of my favorite hobbies include skiing, hiking, off-roading,
            climbing, camping, and about every other hobby in the mountains!"
          </p>
        

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 60rem;
            margin: auto;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 3rem;
          }

          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          .pic {
            height: 450px;
            width: 800px;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}
