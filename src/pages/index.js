export default function Home() {
  return (
    <div className='container'>
      <title>Website</title>
      <link rel='icon' href='/favicon.ico' />

      <main>
        <div className='underline'>
          <h1 className='title'>Tyson Sells </h1>
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
      </main>

      {/* ... remaining code ... */}
    </div>
  );
}

