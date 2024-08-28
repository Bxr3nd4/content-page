function Actividades() {
    return (
      <section>
        <h1>Actividades</h1>
        <nav>
          <ul>
            <li>
              <a href="#cmd-l&t"></a>
            </li>
            <li>
              <a href="#cmd-indentacion"></a>
            </li>
            <li>
              <a href="#cmd-comentarios"></a>
            </li>
            <li>
              <a href="#cmd-variables"></a>
            </li>
          </ul>
          <section id="cmd-l&t">



          <h3>Actividad 1 : </h3>
  
        <p>
        *Actividad realizada en clase, los que ya la terminaron ,solo es crear el  repositorio y subirlo a Github.
        
        <br>
        </br>
            Convertir el pseudocódigo enviado en la primera clase al grupo de whatsapp 
            sobre información del sitio web de unicornio a código en python, crear su respectivo repositorio y subirlo a Github.
                
        <br />
        <li>
              <a href="#cmd-l&t">Listas,Tuplas y Diccionarios</a>
            </li>
        </p>
            <h3>Actividad 2</h3>
  
            <h3></h3>
  
            <p>
            Objetivo:
            En esta actividad, exploraremos las estructuras de datos fundamentales en Python: 
            las tuplas y las listas. Investigaremos sus características, 
            casos de uso específicos en el desarrollo de software, 
            y realizaremos ejemplos prácticos de operaciones con ellas. <br />
              
            </p>
  
            <h3>INVESTIGAR</h3>
            <p>
            
            
            Investiga sobre las tuplas, listas y diccionarios, Además casos de uso dónde se usen y porque son buenas para eso en específico.

            Realizar un ejemplo práctico de operaciones con listas, tuplas y diccionarios.
           

            

              <br />
              * Crear un repositorio y subirlo a Github con el ejemplo de las operaciones (ejemplos de código)
              <br />
              
              <br />
              
            </p>
       

            <h3>Actividad Django</h3>
      <p>
        <strong>Guía Django: Mi primer Sitio Web</strong>
      </p>

      <h4>¿Qué es Django?</h4>
      <p>
        Django — que se pronuncia como si se escribiese “Jango” y recibe ese nombre en honor al famoso guitarrista de jazz Django Reinhardt —
        es un marco de trabajo (framework) gratuito y de código abierto que se publicó por primera vez en 2005. Django ofrece “un desarrollo rápido y un diseño limpio y pragmático”. 
        El marco de trabajo web Django, desplegado en un servidor web, permite a los desarrolladores generar rápidamente un frontend web escalable, seguro y con muchas funciones.
      </p>

      <h4>Pasos para Crear un Proyecto Django</h4>
      <ol>
        <li>
          <strong>Crear Proyecto e Instalar un Entorno Virtual:</strong>
          <br />
          Ejecuta el siguiente comando para crear un entorno virtual en la carpeta del proyecto:
          <pre><code>python -m venv myvenv</code></pre>
        </li>
        <li>
          <strong>Activar el Entorno Virtual:</strong>
          <br />
          (Cada uno activa su entorno virtual con el comando adecuado).
        </li>
        <li>
          <strong>Instalar Django en el Entorno Virtual:</strong>
          <br />
          Ejecuta el siguiente comando para instalar Django:
          <pre><code>pip install Django</code></pre>
        </li>
      </ol>

      <p>
        El siguiente paso es crear el proyecto Django usando un script que trae Django para crear la plantilla del Proyecto. Esto generará los directorios y archivos necesarios.
      </p>

      <p>
        Después de instalar Django en el entorno virtual, ejecuta el siguiente comando con el punto al final:
        <pre><code>django-admin.exe startproject mysite .</code></pre>
      </p>

      <p>
        Esto creará una estructura de directorios parecida a la siguiente:
      </p>
      <pre>
        {`Ruta de tu proyecto
├───manage.py
├───mysite
│   ├───__init__.py
│   ├───settings.py
│   ├───urls.py
│   └───wsgi.py`}
      </pre>

      <p>
        <strong>manage.py</strong> es un script que ayuda con la administración del sitio. Con él podrás iniciar un servidor web en tu ordenador sin necesidad de instalar nada más.
      </p>

      <p>
        El archivo <strong>settings.py</strong> contiene la configuración de tu sitio web.
      </p>

      <p>
        Para ejecutar el servidor y ver el sitio web, usa el siguiente comando en la terminal:
        <pre><code>python manage.py runserver</code></pre>
      </p>

      <p>
        Esto abrirá un navegador donde podrás ver tu sitio web.
      </p>

      <p>
        ¡Hasta este punto ya has creado tu primer sitio web y lo has iniciado usando un servidor web! (Investiga qué es un servidor web). ¡Usando Django! :D
      </p>


          </section>
          <section id="cmd-comentarios">
            
            
            <p>
              
            </p>
          </section>
          <section id="cmd-variables">
            <h3></h3>
            <p>
              
              <br />
              
            </p>
          </section>
        </nav>
      </section>
    );
  }
  
  export default Actividades;
  