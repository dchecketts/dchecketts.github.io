// Since the header and footer are unversal, I decided to consolidate them into a single JS file to be linked to each page

// TODO
// Add light/dark toggle that could trip Tailwind's "dark:" in the top right corner

async function initHeaderFooter() {
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');

  function createHeader() {
    return `
        <header class="bg-green-900 p-5 flex justify-between items-center">
            <h1 class="font-bold text-white text-5xl"><a href="/">Daniel Checketts</a></h1>
            <ul class="flex gap-3">
                <li>
                  <a href="/" 
                  class="text-white 
                  font-semibold 
                  border-white 
                  border-2 
                  rounded-full 
                  p-2 
                  pl-4 pr-4 
                  text-2xl 
                  hover:text-gray-300 
                  hover:border-gray-300">
                  Home</a>
                </li>
                <li>
                  <a href="/about/" 
                  class="text-white 
                  font-semibold 
                  border-white 
                  border-2 
                  rounded-full 
                  p-2 
                  pl-4 pr-4 
                  text-2xl 
                  hover:text-gray-300 
                  hover:border-gray-300">
                  Projects</a>
                </li>
                <li>
                  <a href="/now/" 
                    class="text-white 
                    font-semibold 
                    border-white 
                    border-2 
                    rounded-full 
                    p-2 
                    pl-4 pr-4 
                    text-2xl 
                    hover:text-gray-300 
                    hover:border-gray-300">
                    Now</a>
                  </li>
            </ul>
        </header>`;
  }

  function createFooter() {
    return `
    <footer class="bg-gray-200 text-center p-5 flex flex-col items-center dark:bg-gray-700 dark:text-white">
      <p>&copy; 2026 Daniel Checketts</p>
      <div class="flex items-center pt-2 gap-1">
        <a href="https://github.com/dchecketts/"><img src="images/icons/github-icon.svg" alt="Github" class="min-w-5 max-w-5"></a>
        <a href="www.linkedin.com/in/daniel-checketts"><img src="images/icons/linkedin-icon.png" alt="LinkedIn" class="min-w-5 max-w-5"></a>
        <a href="mailto:danielkchecketts@gmail.com"><img src="images/icons/mail-icon.svg" alt="Contact" class="min-w-5 max-w-5"></a>
      </div>
    </footer>`;
  }

  if (header) header.outerHTML = createHeader();
  if (footer) footer.outerHTML = createFooter();
}

initHeaderFooter();
