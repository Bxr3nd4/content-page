function Github() {
  return (
    <>
      <section>
        <h1>GitHub</h1>
        <p>
          GitHub es una plataforma basada en la web donde los usuarios pueden
          alojar repositorios Git. Facilita compartir y colaborar fácilmente en
          proyectos con cualquier persona en cualquier momento.
        </p>
      </section>
      <hr />
      <nav>
        <h1>Comandos de Git</h1>
        <ul>
          <li>
            <a href="#cmd-init">git init</a>
          </li>
          <li>
            <a href="#cmd-clone">git clone</a>
          </li>
          <li>
            <a href="#cmd-status">git status</a>
          </li>
          <li>
            <a href="#cmd-add-file">git add</a>
          </li>
          <li>
            <a href="#cmd-add-all">git add -A</a>
          </li>
          <li>
            <a href="#cmd-commit">git commit</a>
          </li>
          <li>
            <a href="#cmd-remove">git rm -r</a>
          </li>
          <li>
            <a href="#cmd-push">git push</a>
          </li>
          <br/>
          <li>
            <a href="#cmd-push-branch">git push -u origin</a>
          </li>
          <li>
            <a href="#cmd-push-current">git push</a>
          </li>
          <li>
            <a href="#cmd-delete-remote">git push origin --delete </a>
          </li>
          <li>
            <a href="#cmd-pull">git pull</a>
          </li>
          <li>
            <a href="#cmd-pull-branch">git pull origin</a>
          </li>
          <li>
            <a href="#cmd-remote-add">git remote add origin </a>
          </li>
          <li>
            <a href="#cmd-remote-set-url">git remote set-url origin</a>
          </li>
        </ul>
        <section id="cmd-init">
          <h3>git init</h3>
          <p>
            Inicializa un nuevo repositorio local de Git en el directorio
            actual. Este comando crea un nuevo subdirectorio `.git` que contiene
            todos los archivos necesarios para el repositorio Git.
          </p>
        </section>
        <section id="cmd-clone">
          <h3>git clone</h3>
          <p>
            Crea una copia local de un repositorio remoto existente en GitHub.
          </p>
        </section>
        <section id="cmd-status">
          <h3>git status</h3>
          <p>Comprobar el status actual del repositorio.</p>
        </section>
        <section id="cmd-add-file">
          <h3>git add [nombre-del-archivo.txt]</h3>
          <p>
            Añade un archivo específico a la zona de subir cambios (staging
            area).
          </p>
        </section>
        <section id="cmd-add-all">
          <h3>git add -A</h3>
          <p>
            Añade todos los archivos y cambios del repositorio a la zona de
            subir cambios (staging area).
          </p>
        </section>
        <section id="cmd-commit">
          <h3>git commit</h3>
          <p>
            Crea un commit con los archivos y cambios en la zona de subir
            cambios.
          </p>
        </section>
        <section id="cmd-remove">
          <h3>git rm -r [nombre-del-archivo.txt]</h3>
          <p>
            Elimina un archivo específico del repositorio, incluyendo su
            historial.
          </p>
        </section>
        <section id="cmd-push">
          <h3>git push</h3>
          <p>Envía cambios al repositorio remoto en la rama actual.</p>
        </section>
        <section id="cmd-push-branch">
          <h3>git push -u origin [nombre de la rama]</h3>
          <p>
            Envía una rama local al repositorio remoto y establece el upstream
            para la rama.
          </p>
        </section>
        <section id="cmd-push-current">
          <h3>git push</h3>
          <p>Envía cambios al repositorio remoto en la rama actual.</p>
        </section>
        <section id="cmd-delete-remote">
          <h3>git push origin --delete [nombre de la rama]</h3>
          <p>Elimina una rama remota del repositorio remoto.</p>
        </section>
        <section id="cmd-pull">
          <h3>git pull</h3>
          <p>Actualiza el repositorio local al último commit enviado.</p>
        </section>
        <section id="cmd-pull-branch">
          <h3>git pull origin [nombre de la rama]</h3>
          <p>
            Trae todos los cambios de un repositorio remoto a la rama local
            especificada.
          </p>
        </section>
        <section id="cmd-remote-add">
          <h3>
            git remote add origin
            ssh://git@github.com/[nombreDeUsuario]/[nombre-del-repo].git
          </h3>
          <p>
            Añade un repositorio remoto con la URL especificada como origen.
          </p>
        </section>
        <section id="cmd-remote-set-url">
          <h3>
            git remote set-url origin
            ssh://git@github.com/[nombreDeUsuario]/[nombre-del-repo].git
          </h3>
          <p>Actualiza la URL del repositorio remoto denominado 'origin'.</p>
        </section>
      </nav>
    </>
  );
}

export default Github;
