<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
//import tonejs
import * as Tone from 'tone'

// create test synth
function synthTest() {
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const now = Tone.now()
  synth.triggerAttack("D4", now);
  synth.triggerAttack("F4", now + 0.5);
  synth.triggerAttack("A4", now + 1);
  synth.triggerAttack("C5", now + 1.5);
  synth.triggerAttack("E5", now + 2);
  synth.triggerRelease(["D4", "F4", "A4", "C5", "E5"], now + 4);
}


// create test hat
function hatLoopTest() {
  const loop = new Tone.Loop((time) => {
    // triggered every eighth note.
    console.log(time);
    //make metalSynth
    const metalSynth = new Tone.MetalSynth({
      frequency: 200,
      envelope: {
        attack: 0.001,
        decay: 0.1,
        release: 0.01
      },
      harmonicity: 5.1,
      modulationIndex: 32,
      resonance: 4000,
      octaves: 1.5
    }).toDestination();
    //trigger the note
    metalSynth.triggerAttackRelease("32n", time);
  }, "8n").start(0);
  Tone.Transport.start();
}
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>synthTest</template>

    <!-- testbtn -->
    <button @click="synthTest">Test Synth</button>
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>hatTest</template>

    <!-- testbtn -->
    <button @click="hatLoopTest">Test hat</button>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
    recommended IDE setup is
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If
    you need to test your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
    <a href="https://on.cypress.io/component" target="_blank" rel="noopener">Cypress Component Testing</a>.

    <br />

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener">StackOverflow</a>. You
    should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
    the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem>
</template>
