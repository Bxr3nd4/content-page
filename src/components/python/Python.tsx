function Python() {
  return (
    <section>
      <h1>Python</h1>
      <nav>
        <ul>
          <li>
            <a href="#cmd-l&t">List&Tuple</a>
          </li>
          <li>
            <a href="#cmd-indentacion">Indentación</a>
          </li>
          <li>
            <a href="#cmd-comentarios">Comentarios</a>
          </li>
          <li>
            <a href="#cmd-variables">Variables</a>
          </li>
        </ul>
        <section id="cmd-l&t">
          <h3>DIFFERENCE BETWEEN LIST & TUPLE</h3>

          <h3>LIST</h3>

          <p>
            Mutable (elements can be modified) <br />
            Created using square brackets [ ]<br />
            Example: my_list = [ 1, 2, 3 ]<br />
            Generally a little slow due to mutability
            <br />
            Not hashable (can't be used as dictionary keys)
            <br />
            Takes up more memory due to potential resizing
            <br />
            Has more methods since it's mutable
          </p>

          <h3>TUPLE</h3>
          <p>
            Immutable (elements can't be modified)
            <br />
            Created using round brackets ( )<br />
            Example: my_tuple = ( 1, 2, 3 )<br />
            Generally a little faster due to immutability
            <br />
            Hashable (can be used as dictionary keys)
            <br />
            Takes up less memory since size is fixed
            <br />
            Has fewer methods since it's immutable
          </p>
        </section>
        <section id="cmd-indentacion">
          <h3>Indentación en Python</h3>
          <p>
            Es fundamental el buen uso de la indentación en cualquier lenguaje
            de programación, en Python se usa para definir cada bloque de código
            y cada instrucción de ese bloque que lo compone .
          </p>
        </section>
        <section id="cmd-comentarios">
          <h3>Comentarios Código</h3>
          <p>
            Se usa #seguido del texto o """ triple comilla para documentar
            párrafos y/o Bloques de código más largos."""
          </p>
        </section>
        <section id="cmd-variables">
          <h3>Asignación de variables</h3>
          <p>
            Una variable es un contenedor en el que se almacena un dato, el
            cuál, puede cambiar durante el flujo del programa. <br />
            En Python se usa el operador = para asignar valor a una variable.
            <br />
            Existen varios tipos, int, Float, String
          </p>
        </section>
      </nav>
    </section>
  );
}

export default Python;
