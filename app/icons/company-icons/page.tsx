'use client';
import React from 'react';
import Logo from '../../../components/Logo';
import ScrollNavigation from '../../../components/ScrollNavigation';

export default function BrandIconsPage() {
  return (
    <div className="bg-grey-900 min-h-screen">
      <div
        className="bg-grey-900 relative w-full min-h-screen"
        data-name="Brand Icons"
      >
        <div className="relative size-full">
          {/* Scroll Navigation */}
          <ScrollNavigation currentPage="brand-icons" />

          <div className="fixed-padding-container relative size-full">
            {/* Title Section */}
            <div
              className="box-border content-stretch flex flex-col gap-[100px] items-start justify-start overflow-clip pb-2.5 pt-[100px] px-0 relative rounded-3xl shrink-0 content-responsive"
              data-name="_header"
            >
              {/* Title */}
              <div
                className="box-border content-stretch flex flex-col font-host-grotesk font-normal gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-grey-50 text-left w-full"
                data-name="Title"
              >
                <div className="relative shrink-0 text-[0px] w-full">
                  <p className="leading-[1.4] text-text-large">
                    <span>Core /</span>
                    <span className="font-host-grotesk not-italic text-grey-300">{` Icons / Brand Icons `}</span>
                  </p>
                </div>
                <div className="relative shrink-0 text-display-xxl tracking-[-4.48px] w-full">
                  <h1 className="adjustLetterSpacing block leading-none" style={{ marginBottom: '30px' }}>
                    Company Icons
                  </h1>
                </div>
              </div>
            </div>

            {/* Company Icons Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-[100px] relative shrink-0 content-responsive"
              data-name="Company Icons"
            >
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-start p-0 relative shrink-0"
                data-name="Description"
              >
                <div
                  className="box-border content-stretch flex flex-col font-host-grotesk font-normal gap-4 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="relative shrink-0 text-grey-50 text-heading-medium tracking-[-0.64px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.3]">
                      Company Icons
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      Our brand system uses a curated selection from the Integrations library by Andrey Kovalev on Figma community.{' '}
                      <a 
                        href="https://www.figma.com/@akovalev" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-host-grotesk font-normal text-[18px] leading-[1.4] cursor-pointer"
                        style={{ color: '#4648FF' }}
                      >
                        The library can be found here.
                      </a>
                    </p>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      企業アイコン
                    </p>
                  </div>
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      私たちのブランドシステムでは、FigmaコミュニティでAndrey
                      Kovalevが公開している「Integrationsライブラリ」から厳選したアイコンセットを使用しています。{' '}
                      <a 
                        href="https://www.figma.com/@akovalev" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-ibm-plex-sans-jp font-normal text-[18px] leading-[1.4] underline cursor-pointer"
                        style={{ color: '#4648FF' }}
                      >
                        ライブラリの詳細はこちらから
                      </a>
                      ご覧いただけます。
                    </p>
                  </div>
                </div>
              </div>

              {/* Company Icons Grid */}
              <div
                className="box-border content-stretch flex flex-col gap-20 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Company Icons Grid"
              >
                {/* Browsers */}
                <div className="flex flex-col gap-10 w-full">
                  <h3 className="text-grey-50 text-[32px] font-host-grotesk tracking-[-0.64px] leading-[1.3]">Browsers</h3>
                  <div className="flex flex-wrap gap-8 w-full">
                    <img src="/assets/icons/01_safari.png" alt="Safari" className="w-8 h-8" />
                    <img src="/assets/icons/02_chrome.png" alt="Chrome" className="w-8 h-8" />
                    <img src="/assets/icons/03_ie.png" alt="Internet Explorer" className="w-8 h-8" />
                    <img src="/assets/icons/04_opera.png" alt="Opera" className="w-8 h-8" />
                    <img src="/assets/icons/05_uc.png" alt="UC Browser" className="w-8 h-8" />
                    <img src="/assets/icons/06_firefox.png" alt="Firefox" className="w-8 h-8" />
                    <img src="/assets/icons/07_tor.png" alt="Tor" className="w-8 h-8" />
                    <img src="/assets/icons/08_yandex.png" alt="Yandex" className="w-8 h-8" />
                    <img src="/assets/icons/09_edge.png" alt="Edge" className="w-8 h-8" />
                  </div>
                </div>

                {/* Social */}
                <div className="flex flex-col gap-10 w-full">
                  <h3 className="text-grey-50 text-[32px] font-host-grotesk tracking-[-0.64px] leading-[1.3]">Social</h3>
                  <div className="flex flex-wrap gap-8 w-full">
                    <img src="/assets/icons/10_twitter.png" alt="Twitter" className="w-8 h-8" />
                    <img src="/assets/icons/11_linkedin.png" alt="LinkedIn" className="w-8 h-8" />
                    <img src="/assets/icons/12_instagram.png" alt="Instagram" className="w-8 h-8" />
                    <img src="/assets/icons/13_snapchat.png" alt="Snapchat" className="w-8 h-8" />
                    <img src="/assets/icons/14_quora.png" alt="Quora" className="w-8 h-8" />
                    <img src="/assets/icons/15_tinder.png" alt="Tinder" className="w-8 h-8" />
                    <img src="/assets/icons/16_reddit.png" alt="Reddit" className="w-8 h-8" />
                    <img src="/assets/icons/17_weibo.png" alt="Weibo" className="w-8 h-8" />
                    <img src="/assets/icons/18_qzone.png" alt="Qzone" className="w-8 h-8" />
                    <img src="/assets/icons/19_tumbler.png" alt="Tumblr" className="w-8 h-8" />
                    <img src="/assets/icons/20_stack_overflow.png" alt="Stack Overflow" className="w-8 h-8" />
                    <img src="/assets/icons/21_foursquare.png" alt="Foursquare" className="w-8 h-8" />
                    <img src="/assets/icons/22_tiktok.png" alt="TikTok" className="w-8 h-8" />
                    <img src="/assets/icons/23_pinterest.png" alt="Pinterest" className="w-8 h-8" />
                    <img src="/assets/icons/24_badoo.png" alt="Badoo" className="w-8 h-8" />
                    <img src="/assets/icons/25_Facebook.png" alt="Facebook" className="w-8 h-8" />
                    <img src="/assets/icons/26_OK.png" alt="OK" className="w-8 h-8" />
                    <img src="/assets/icons/27_askfm.png" alt="Ask.fm" className="w-8 h-8" />
                    <img src="/assets/icons/28_patreon.png" alt="Patreon" className="w-8 h-8" />
                    <img src="/assets/icons/29_meta.png" alt="Meta" className="w-8 h-8" />
                    <img src="/assets/icons/30_vk.png" alt="VK" className="w-8 h-8" />
                  </div>
                </div>

                {/* Development */}
                <div className="flex flex-col gap-10 w-full">
                  <h3 className="text-grey-50 text-[32px] font-host-grotesk tracking-[-0.64px] leading-[1.3]">Development</h3>
                  <div className="flex flex-wrap gap-8 w-full">
                    <img src="/assets/icons/31_git.png" alt="Git" className="w-8 h-8" />
                    <img src="/assets/icons/32_css_3.png" alt="CSS 3" className="w-8 h-8" />
                    <img src="/assets/icons/33_html_5.png" alt="HTML 5" className="w-8 h-8" />
                    <img src="/assets/icons/34_js.png" alt="JavaScript" className="w-8 h-8" />
                    <img src="/assets/icons/35_node_js.png" alt="Node.js" className="w-8 h-8" />
                    <img src="/assets/icons/36_bitbucket.png" alt="Bitbucket" className="w-8 h-8" />
                    <img src="/assets/icons/37_codepen.png" alt="CodePen" className="w-8 h-8" />
                    <img src="/assets/icons/38_jquery.png" alt="jQuery" className="w-8 h-8" />
                    <img src="/assets/icons/39_jb_appcode.png" alt="JetBrains AppCode" className="w-8 h-8" />
                    <img src="/assets/icons/40_jb_clion.png" alt="JetBrains CLion" className="w-8 h-8" />
                    <img src="/assets/icons/41_jb_rider.png" alt="JetBrains Rider" className="w-8 h-8" />
                    <img src="/assets/icons/42_jb_resharper.png" alt="JetBrains ReSharper" className="w-8 h-8" />
                    <img src="/assets/icons/43_jb_resharper_c++.png" alt="JetBrains ReSharper C++" className="w-8 h-8" />
                    <img src="/assets/icons/44_jb_datagrip.png" alt="JetBrains DataGrip" className="w-8 h-8" />
                    <img src="/assets/icons/45_jb_goland.png" alt="JetBrains GoLand" className="w-8 h-8" />
                    <img src="/assets/icons/46_jb_phpstorm.png" alt="JetBrains PhpStorm" className="w-8 h-8" />
                    <img src="/assets/icons/47_jb_pycharm.png" alt="JetBrains PyCharm" className="w-8 h-8" />
                    <img src="/assets/icons/48_jb_rubymine.png" alt="JetBrains RubyMine" className="w-8 h-8" />
                    <img src="/assets/icons/49_jb_webstorm.png" alt="JetBrains WebStorm" className="w-8 h-8" />
                    <img src="/assets/icons/50_jb_dotcover.png" alt="JetBrains dotCover" className="w-8 h-8" />
                    <img src="/assets/icons/51_jb_dotmemory.png" alt="JetBrains dotMemory" className="w-8 h-8" />
                    <img src="/assets/icons/52_jb_dotpeek.png" alt="JetBrains dotPeek" className="w-8 h-8" />
                    <img src="/assets/icons/53_jb_dottrace.png" alt="JetBrains dotTrace" className="w-8 h-8" />
                    <img src="/assets/icons/54_jb_teamcity.png" alt="JetBrains TeamCity" className="w-8 h-8" />
                    <img src="/assets/icons/55_jb_upsource.png" alt="JetBrains Upsource" className="w-8 h-8" />
                    <img src="/assets/icons/56_jb_youtrack.png" alt="JetBrains YouTrack" className="w-8 h-8" />
                    <img src="/assets/icons/57_atom.png" alt="Atom" className="w-8 h-8" />
                    <img src="/assets/icons/58_vs_code.png" alt="VS Code" className="w-8 h-8" />
                    <img src="/assets/icons/59_sublime_text.png" alt="Sublime Text" className="w-8 h-8" />
                    <img src="/assets/icons/60_jb_hub.png" alt="JetBrains Hub" className="w-8 h-8" />
                    <img src="/assets/icons/61_jb_pycharm_edu.png" alt="JetBrains PyCharm Edu" className="w-8 h-8" />
                    <img src="/assets/icons/62_jb_IntelliJ IDEA.png" alt="JetBrains IntelliJ IDEA" className="w-8 h-8" />
                    <img src="/assets/icons/63_jb_kotlin.png" alt="JetBrains Kotlin" className="w-8 h-8" />
                    <img src="/assets/icons/64_jb_toolbox_app.png" alt="JetBrains Toolbox" className="w-8 h-8" />
                    <img src="/assets/icons/65_c++.png" alt="C++" className="w-8 h-8" />
                    <img src="/assets/icons/66_java.png" alt="Java" className="w-8 h-8" />
                    <img src="/assets/icons/67_python.png" alt="Python" className="w-8 h-8" />
                    <img src="/assets/icons/68_ruby.png" alt="Ruby" className="w-8 h-8" />
                    <img src="/assets/icons/69_php.png" alt="PHP" className="w-8 h-8" />
                    <img src="/assets/icons/70_swift.png" alt="Swift" className="w-8 h-8" />
                    <img src="/assets/icons/71_r_lang.png" alt="R" className="w-8 h-8" />
                    <img src="/assets/icons/72_go.png" alt="Go" className="w-8 h-8" />
                    <img src="/assets/icons/73_c#.png" alt="C#" className="w-8 h-8" />
                    <img src="/assets/icons/74_docker.png" alt="Docker" className="w-8 h-8" />
                    <img src="/assets/icons/75_angular.png" alt="Angular" className="w-8 h-8" />
                    <img src="/assets/icons/76_vue.png" alt="Vue" className="w-8 h-8" />
                    <img src="/assets/icons/77_wordpress.png" alt="WordPress" className="w-8 h-8" />
                    <img src="/assets/icons/78_react.png" alt="React" className="w-8 h-8" />
                    <img src="/assets/icons/79_npm.png" alt="npm" className="w-8 h-8" />
                    <img src="/assets/icons/80_redux.png" alt="Redux" className="w-8 h-8" />
                    <img src="/assets/icons/81_joomla.png" alt="Joomla" className="w-8 h-8" />
                    <img src="/assets/icons/82_drupal.png" alt="Drupal" className="w-8 h-8" />
                    <img src="/assets/icons/83_weebly.png" alt="Weebly" className="w-8 h-8" />
                    <img src="/assets/icons/84_yii 1.png" alt="Yii" className="w-8 h-8" />
                    <img src="/assets/icons/85_adobe_dreamweaver.png" alt="Adobe Dreamweaver" className="w-8 h-8" />
                  </div>
                </div>

                {/* Productivity */}
                <div className="flex flex-col gap-10 w-full">
                  <h3 className="text-grey-50 text-[32px] font-host-grotesk tracking-[-0.64px] leading-[1.3]">Productivity</h3>
                  <div className="flex flex-wrap gap-8 w-full">
                    <img src="/assets/icons/86_dropbox.png" alt="Dropbox" className="w-8 h-8" />
                    <img src="/assets/icons/87_atlassian.png" alt="Atlassian" className="w-8 h-8" />
                    <img src="/assets/icons/88_confluence.png" alt="Confluence" className="w-8 h-8" />
                    <img src="/assets/icons/89_jira.png" alt="Jira" className="w-8 h-8" />
                    <img src="/assets/icons/90_trello.png" alt="Trello" className="w-8 h-8" />
                    <img src="/assets/icons/91_jira_service_desk.png" alt="Jira Service Desk" className="w-8 h-8" />
                    <img src="/assets/icons/92_jira_ops.png" alt="Jira Ops" className="w-8 h-8" />
                    <img src="/assets/icons/93_jira_core.png" alt="Jira Core" className="w-8 h-8" />
                    <img src="/assets/icons/94_statuspage.png" alt="Statuspage" className="w-8 h-8" />
                    <img src="/assets/icons/95_opsgenie.png" alt="Opsgenie" className="w-8 h-8" />
                    <img src="/assets/icons/96_bamboo.png" alt="Bamboo" className="w-8 h-8" />
                    <img src="/assets/icons/97_sourcetree.png" alt="Sourcetree" className="w-8 h-8" />
                    <img src="/assets/icons/98_flowmapp.png" alt="Flowmapp" className="w-8 h-8" />
                    <img src="/assets/icons/99_mailchimp.png" alt="Mailchimp" className="w-8 h-8" />
                    <img src="/assets/icons/100_gmail.png" alt="Gmail" className="w-8 h-8" />
                    <img src="/assets/icons/101_ms_excel.png" alt="Microsoft Excel" className="w-8 h-8" />
                    <img src="/assets/icons/102_ms_word.png" alt="Microsoft Word" className="w-8 h-8" />
                    <img src="/assets/icons/103_ms_onenote.png" alt="Microsoft OneNote" className="w-8 h-8" />
                    <img src="/assets/icons/104_ms_outlook.png" alt="Microsoft Outlook" className="w-8 h-8" />
                    <img src="/assets/icons/105_ms_powerpoint.png" alt="Microsoft PowerPoint" className="w-8 h-8" />
                    <img src="/assets/icons/106_ms_sharepoint.png" alt="Microsoft SharePoint" className="w-8 h-8" />
                    <img src="/assets/icons/107_google_drive.png" alt="Google Drive" className="w-8 h-8" />
                    <img src="/assets/icons/108_g-calendar.png" alt="Google Calendar" className="w-8 h-8" />
                    <img src="/assets/icons/109_google docs.png" alt="Google Docs" className="w-8 h-8" />
                    <img src="/assets/icons/110_google meet.png" alt="Google Meet" className="w-8 h-8" />
                    <img src="/assets/icons/111_google maps.png" alt="Google Maps" className="w-8 h-8" />
                    <img src="/assets/icons/112_evernote.png" alt="Evernote" className="w-8 h-8" />
                    <img src="/assets/icons/113_amazon.png" alt="Amazon" className="w-8 h-8" />
                    <img src="/assets/icons/114_asana.png" alt="Asana" className="w-8 h-8" />
                    <img src="/assets/icons/115_basecamp.png" alt="Basecamp" className="w-8 h-8" />
                    <img src="/assets/icons/116_teams.png" alt="Microsoft Teams" className="w-8 h-8" />
                    <img src="/assets/icons/117_ms_yammer.png" alt="Microsoft Yammer" className="w-8 h-8" />
                    <img src="/assets/icons/118_ms_onedrive.png" alt="Microsoft OneDrive" className="w-8 h-8" />
                    <img src="/assets/icons/119_zendesk.png" alt="Zendesk" className="w-8 h-8" />
                    <img src="/assets/icons/120_kayako.png" alt="Kayako" className="w-8 h-8" />
                    <img src="/assets/icons/121_intercom.png" alt="Intercom" className="w-8 h-8" />
                    <img src="/assets/icons/122_treehouse.png" alt="Treehouse" className="w-8 h-8" />
                    <img src="/assets/icons/123_finder.png" alt="Finder" className="w-8 h-8" />
                    <img src="/assets/icons/124_zapier.png" alt="Zapier" className="w-8 h-8" />
                    <img src="/assets/icons/125_notion.png" alt="Notion" className="w-8 h-8" />
                    <img src="/assets/icons/126_things.png" alt="Things" className="w-8 h-8" />
                    <img src="/assets/icons/127_workflowy.png" alt="Workflowy" className="w-8 h-8" />
                    <img src="/assets/icons/128_procreate.png" alt="Procreate" className="w-8 h-8" />
                  </div>
                </div>

                {/* Design */}
                <div className="flex flex-col gap-10 w-full">
                  <h3 className="text-grey-50 text-[32px] font-host-grotesk tracking-[-0.64px] leading-[1.3]">Design</h3>
                  <div className="flex flex-wrap gap-8 w-full">
                    <img src="/assets/icons/129_dribbble.png" alt="Dribbble" className="w-8 h-8" />
                    <img src="/assets/icons/130_behance.png" alt="Behance" className="w-8 h-8" />
                    <img src="/assets/icons/131_invision.png" alt="InVision" className="w-8 h-8" />
                    <img src="/assets/icons/132_autodesk.png" alt="Autodesk" className="w-8 h-8" />
                    <img src="/assets/icons/133_sketch.png" alt="Sketch" className="w-8 h-8" />
                    <img src="/assets/icons/134_figma.png" alt="Figma" className="w-8 h-8" />
                    <img src="/assets/icons/135_zeplin.png" alt="Zeplin" className="w-8 h-8" />
                    <img src="/assets/icons/136_framer.png" alt="Framer" className="w-8 h-8" />
                    <img src="/assets/icons/137_marvel.png" alt="Marvel" className="w-8 h-8" />
                    <img src="/assets/icons/138_adobe_lightroom.png" alt="Adobe Lightroom" className="w-8 h-8" />
                    <img src="/assets/icons/139_adobe_illustrator.png" alt="Adobe Illustrator" className="w-8 h-8" />
                    <img src="/assets/icons/140_adobe_after_effects.png" alt="Adobe After Effects" className="w-8 h-8" />
                    <img src="/assets/icons/141_adobe_photoshop.png" alt="Adobe Photoshop" className="w-8 h-8" />
                    <img src="/assets/icons/142_adobe_indesign.png" alt="Adobe InDesign" className="w-8 h-8" />
                    <img src="/assets/icons/143_adobe_incopy.png" alt="Adobe InCopy" className="w-8 h-8" />
                    <img src="/assets/icons/144_adobe_stock.png" alt="Adobe Stock" className="w-8 h-8" />
                    <img src="/assets/icons/145_adobe_spark.png" alt="Adobe Spark" className="w-8 h-8" />
                    <img src="/assets/icons/146_adobe_premiere-rush.png" alt="Adobe Premiere Rush" className="w-8 h-8" />
                    <img src="/assets/icons/147_adobe_premiere.png" alt="Adobe Premiere" className="w-8 h-8" />
                    <img src="/assets/icons/148_adobe_xd.png" alt="Adobe XD" className="w-8 h-8" />
                    <img src="/assets/icons/149_adobe_creative-cloud.png" alt="Adobe Creative Cloud" className="w-8 h-8" />
                    <img src="/assets/icons/150_acrobat-reader.png" alt="Acrobat Reader" className="w-8 h-8" />
                    <img src="/assets/icons/151_adobe_dimension.png" alt="Adobe Dimension" className="w-8 h-8" />
                    <img src="/assets/icons/152_adobe_aero.png" alt="Adobe Aero" className="w-8 h-8" />
                    <img src="/assets/icons/153_adobe.png" alt="Adobe" className="w-8 h-8" />
                    <img src="/assets/icons/154_adobe_animate.png" alt="Adobe Animate" className="w-8 h-8" />
                    <img src="/assets/icons/155_adobe_fill-and-sign.png" alt="Adobe Fill & Sign" className="w-8 h-8" />
                    <img src="/assets/icons/156_adobe_photoshop-camera.png" alt="Adobe Photoshop Camera" className="w-8 h-8" />
                    <img src="/assets/icons/157_adobe_photoshop-express.png" alt="Adobe Photoshop Express" className="w-8 h-8" />
                  </div>
                </div>

                {/* OS */}
                <div className="flex flex-col gap-10 w-full">
                  <h3 className="text-grey-50 text-[32px] font-host-grotesk tracking-[-0.64px] leading-[1.3]">OS</h3>
                  <div className="flex flex-wrap gap-8 w-full">
                    <img src="/assets/icons/158_ubuntu.png" alt="Ubuntu" className="w-8 h-8" />
                    <img src="/assets/icons/159_apple.png" alt="Apple" className="w-8 h-8" />
                    <img src="/assets/icons/160_microsoft.png" alt="Microsoft" className="w-8 h-8" />
                    <img src="/assets/icons/161_android.png" alt="Android" className="w-8 h-8" />
                    <img src="/assets/icons/162_ios.png" alt="iOS" className="w-8 h-8" />
                    <img src="/assets/icons/163_macos.png" alt="macOS" className="w-8 h-8" />
                    <img src="/assets/icons/164_freebsd.png" alt="FreeBSD" className="w-8 h-8" />
                    <img src="/assets/icons/165_linux.png" alt="Linux" className="w-8 h-8" />
                    <img src="/assets/icons/166_blackberry.png" alt="BlackBerry" className="w-8 h-8" />
                    <img src="/assets/icons/167_chrome_os.png" alt="Chrome OS" className="w-8 h-8" />
                    <img src="/assets/icons/168_elementary.png" alt="Elementary" className="w-8 h-8" />
                    <img src="/assets/icons/169_gnome.png" alt="GNOME" className="w-8 h-8" />
                    <img src="/assets/icons/170_linux-mint.png" alt="Linux Mint" className="w-8 h-8" />
                    <img src="/assets/icons/171_fedora.png" alt="Fedora" className="w-8 h-8" />
                  </div>
                </div>

                {/* Video */}
                <div className="flex flex-col gap-10 w-full">
                  <h3 className="text-grey-50 text-[32px] font-host-grotesk tracking-[-0.64px] leading-[1.3]">Video</h3>
                  <div className="flex flex-wrap gap-8 w-full">
                    <img src="/assets/icons/172_youtube.png" alt="YouTube" className="w-8 h-8" />
                    <img src="/assets/icons/173_vimeo.png" alt="Vimeo" className="w-8 h-8" />
                    <img src="/assets/icons/174_twitch.png" alt="Twitch" className="w-8 h-8" />
                    <img src="/assets/icons/175_appearin.png" alt="Appear.in" className="w-8 h-8" />
                    <img src="/assets/icons/176_igtv.png" alt="IGTV" className="w-8 h-8" />
                    <img src="/assets/icons/177_flickr.png" alt="Flickr" className="w-8 h-8" />
                    <img src="/assets/icons/178_netflix.png" alt="Netflix" className="w-8 h-8" />
                    <img src="/assets/icons/179_coub.png" alt="Coub" className="w-8 h-8" />
                  </div>
                </div>

                {/* Music */}
                <div className="flex flex-col gap-10 w-full">
                  <h3 className="text-grey-50 text-[32px] font-host-grotesk tracking-[-0.64px] leading-[1.3]">Music</h3>
                  <div className="flex flex-wrap gap-8 w-full">
                    <img src="/assets/icons/180_sound_cloud.png" alt="SoundCloud" className="w-8 h-8" />
                    <img src="/assets/icons/181_grooveshark.png" alt="Grooveshark" className="w-8 h-8" />
                    <img src="/assets/icons/182_spotify.png" alt="Spotify" className="w-8 h-8" />
                    <img src="/assets/icons/183_apple_music.png" alt="Apple Music" className="w-8 h-8" />
                    <img src="/assets/icons/184_google_play_music.png" alt="Google Play Music" className="w-8 h-8" />
                    <img src="/assets/icons/185_shazam.png" alt="Shazam" className="w-8 h-8" />
                    <img src="/assets/icons/186_youtube_music.png" alt="YouTube Music" className="w-8 h-8" />
                    <img src="/assets/icons/187_yandex_music.png" alt="Yandex Music" className="w-8 h-8" />
                    <img src="/assets/icons/188_audition.png" alt="Adobe Audition" className="w-8 h-8" />
                  </div>
                </div>

                {/* Payment */}
                <div className="flex flex-col gap-10 w-full">
                  <h3 className="text-grey-50 text-[32px] font-host-grotesk tracking-[-0.64px] leading-[1.3]">Payment</h3>
                  <div className="flex flex-wrap gap-8 w-full">
                    <img src="/assets/icons/189_paypal.png" alt="PayPal" className="w-8 h-8" />
                    <img src="/assets/icons/190_yandex_kassa.png" alt="Yandex Kassa" className="w-8 h-8" />
                    <img src="/assets/icons/191_stripe.png" alt="Stripe" className="w-8 h-8" />
                    <img src="/assets/icons/192_mastercard.png" alt="Mastercard" className="w-8 h-8" />
                    <img src="/assets/icons/193_visa.png" alt="Visa" className="w-8 h-8" />
                    <img src="/assets/icons/194_qiwi.png" alt="QIWI" className="w-8 h-8" />
                    <img src="/assets/icons/195_alfa_bank.png" alt="Alfa Bank" className="w-8 h-8" />
                    <img src="/assets/icons/196_shopify.png" alt="Shopify" className="w-8 h-8" />
                    <img src="/assets/icons/197_american_express.png" alt="American Express" className="w-8 h-8" />
                    <img src="/assets/icons/198_swift.png" alt="Swift" className="w-8 h-8" />
                    <img src="/assets/icons/199_world_pay.png" alt="WorldPay" className="w-8 h-8" />
                    <img src="/assets/icons/200_tinkoff.png" alt="Tinkoff" className="w-8 h-8" />
                    <img src="/assets/icons/201_direct_debit.png" alt="Direct Debit" className="w-8 h-8" />
                    <img src="/assets/icons/202_webmoney.png" alt="WebMoney" className="w-8 h-8" />
                    <img src="/assets/icons/203_jcb.png" alt="JCB" className="w-8 h-8" />
                    <img src="/assets/icons/204_western_union.png" alt="Western Union" className="w-8 h-8" />
                    <img src="/assets/icons/205_sberbank.png" alt="Sberbank" className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div
              className="box-border content-stretch flex flex-col md:flex-row items-start md:items-center justify-between pb-20 pt-[60px] md:pt-[80px] lg:pt-[100px] px-0 relative shrink-0 content-responsive gap-6 md:gap-8"
              data-name="Footer"
            >
              <div
                className="box-border content-stretch flex flex-col font-host-grotesk font-normal gap-3 md:gap-4 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full md:w-auto flex-1"
                data-name="Description"
              >
                <div className="relative shrink-0 text-grey-50 w-full">
                  <p className="block leading-[1.4] text-base md:text-lg lg:text-text-large">
                    The only brand system that you'll ever need!
                  </p>
                </div>
                <div className="relative shrink-0 text-grey-300 w-full">
                  <p className="block leading-[1.4] text-sm md:text-base lg:text-text-large break-all md:break-normal">
                    https://brandkitpro.framer.website
                  </p>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start md:justify-end p-0 relative shrink-0 mt-4 md:mt-0"
                data-name="Logo"
              >
                <Logo size="Medium" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}