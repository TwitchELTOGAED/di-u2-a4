const poem = {
  lines: [
    'Escribo, borro y reescribo',
    'Borro de nuevo, y luego',
    'Florece una amapola.' 
  ]
};

export default function Poem() {
  let output = [];
  poem.lines.forEach((line, i) => {
    output.push(
      <hr key={i + '-separator'} />
    );
    output.push(
      <p key={i + '-text'}>
        {line}
      </p>
    );
  });
  output.shift();
  return (
    <article>
      {output}
    </article>
  );
}
