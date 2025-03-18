<script setup>
  import { computed } from 'vue';
  import EmailIcon from '@/assets/email.svg?component';
  import PhoneIcon from '@/assets/phone.svg?component';
  import LocationIcon from '@/assets/location.svg?component';
  import WorkIcon from '@/assets/work.svg?component';
  import GithubIcon from '@/assets/github.svg?component';
  import LinkedinIcon from '@/assets/linkedin.svg?component';
  import ResumeIcon from '@/assets/resume-color.svg?component';

  import ContactItem from '@/components/ContactItem.vue'
  import { useTranslations, getLangFromUrl } from '@/i18n/utils';
  import { MY_LINKEDIN as myLinkedin, 
           MY_GITHUB as myGithub,
           MY_EMAIL as email,
           MY_PHONE as phone,
           MY_LOCATION as location
         } from '@/i18n/constants';

  const linkedinLink = `https://www.linkedin.com/in/${myLinkedin}`
  const githubLink = `https://github.com/${myGithub}`
  
  const lang = getLangFromUrl(new URL(window.location.href));
  const t = useTranslations(lang);

  // const tags = computed(() => [
  //   'Blockchain', 'Web3', 'Smart Contracts', 'DeFi', 'NFTs', 
  //   'Solidity', 'Ethereum', 'React', 'Node.js', 'TypeScript'
  // ]);
</script>  

<template>
    <section id="about" class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold mb-8 text-center">{{ t('about.title') }}</h2>
          
          <div class="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 md:p-8">
            <div class="flex flex-col md:flex-row gap-8 items-center">
              <div class="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary shadow-lg">
                <img src="/profile-picture.jpeg" alt="Profile" class="w-full h-full object-cover" />
              </div>

              <div class="flex flex-col mx-auto">
                <div class="space-y-2 justify-items-center md:justify-items-start">
                    <ContactItem 
                        class="bg-green-500/50 rounded-lg py-2" 
                        :icon="WorkIcon" text="Open to work" 
                    />
                    <ContactItem :icon="EmailIcon" :text="email" :href="`mailto:${email}`" />
                    <ContactItem :icon="PhoneIcon" :text="phone" />
                    <ContactItem :icon="LocationIcon" :text="location" />
                    <ContactItem :icon="GithubIcon" :text="`@${myGithub}`" :href="githubLink" />
                    <ContactItem :icon="LinkedinIcon" :text="myLinkedin" :href="linkedinLink" />
                </div>
              </div>
              <div class="flex flex-col mx-auto align-top mb-auto gap-2">

              <div class="flex flex-row items-center mx-auto gap-2">
                <ResumeIcon class="w-8 h-8" />
                <p class="font-semibold">{{t('about.CV')}}</p>
              </div>
              <a 
                class="bg-primary text-center text-white rounded-lg py-2 px-4 hover:bg-primary/50 transition duration-200" 
                :href="t('site.cvLink')" target="_blank" rel="nonopener noreferrer">
                  View CV
            </a>
              <a 
                class="bg-secondary text-white rounded-lg py-2 px-4 hover:bg-secondary/50 transition duration-200" 
                :href="t('site.cvLink')" target="_blank" :download="`CV_MarcAntoniMas_${lang.toUpperCase()}`">
                  Download CV
          </a>
          <!-- <download-pdf-button :pdf-url="t('site.cvLink')" pdf-file-name="custom name">
            Download CV
            </download-pdf-button> -->
            </div>
              
          </div>
          <div class="flex-1">
            <h3 class="text-2xl font-bold mb-4">{{ t('about.name') }}</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">{{ t('about.bio') }}</p>
            
            <!-- <div class="flex flex-wrap gap-2">
              <span v-for="tag in tags" :key="tag" class="px-3 py-1 bg-secondary/10 dark:bg-secondary text-secondary dark:text-white rounded-full text-sm">
                {{ tag }}
              </span>
            </div> -->
          </div>
            
            <div class="mt-8">
              <h4 class="text-xl font-semibold mb-4">{{ t('about.what_i_do_title') }}</h4>
              <p class="text-gray-700 dark:text-gray-300 mb-4">{{ t('about.what_i_do_description') }}</p>
              
              <h4 class="text-xl font-semibold mb-4 mt-6">{{ t('about.looking_for_title') }}</h4>
              <p class="text-gray-700 dark:text-gray-300">{{ t('about.looking_for_description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>