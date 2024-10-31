function Background({control}) {
  return (
    <>
        <video className="fixed min-h-screen min-w-max left-0 opacity-25 top-0 z-[-1]" autoPlay muted loop>
          <source src="src/background/CircuitB.mp4" type="video/mp4" />
        </video>

    </>
  );
}

export default Background;