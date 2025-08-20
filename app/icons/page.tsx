'use client';
import React from 'react';
import Logo from '../../components/Logo';
import ScrollNavigation from '../../components/ScrollNavigation';
import Footer from '../../components/Footer';

export default function IconsPage() {
  return (
    <div className="bg-grey-900 min-h-screen">
      <div
        className="bg-grey-900 relative w-full min-h-screen"
        data-name="Brand Icons"
      >
        <div className="relative size-full">
          {/* Scroll Navigation */}
          <ScrollNavigation currentPage="icons" />

          <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start overflow-clip pb-20 pt-0 fixed-padding-container relative size-full">
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
                    Brand Icons
                  </h1>
                </div>
              </div>
            </div>

            {/* Hero Icons Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-[100px] relative shrink-0 content-responsive"
              data-name="Hero Icons"
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
                      Hero Icons
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      Our brand system uses a curated selection from the amazing Hero Icons set. More icons can be found at{' '}
                      <a 
                        href="https://heroicons.com/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-['Poppins',_sans-serif] font-normal text-[18px] leading-[1.4] underline cursor-pointer"
                        style={{ color: '#4648FF' }}
                      >
                        Hero Icons
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
                      アイコン
                    </p>
                  </div>
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      私たちのブランドシステムでは、優れたHero Iconsコレクションから厳選したアイコンを使用しています。{' '}
                      <a 
                        href="https://heroicons.com/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-ibm-plex-sans-jp font-normal text-[18px] leading-[1.4] underline cursor-pointer"
                        style={{ color: '#4648FF' }}
                      >
                        Hero Iconsの詳細はこちらから
                      </a>
                      確認いただけます
                    </p>
                  </div>
                </div>
              </div>

              {/* Icons Grid */}
              <div
                className="box-border content-stretch flex flex-col gap-10 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Icons Grid"
              >
                {/* Row 1 */}
                <div className="flex flex-wrap gap-4 w-full justify-start">
                  <img src="/assets/icons/01_adjustments-horizontal.svg" alt="Adjustments Horizontal" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/02_adjustments-vertical.svg" alt="Adjustments Vertical" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/03_archive-box.svg" alt="Archive Box" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/04_archive-box-arrow-down.svg" alt="Archive Box Arrow Down" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/05_arrow-down.svg" alt="Arrow Down" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/06_arrow-down-circle.svg" alt="Arrow Down Circle" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/07_arrow-down-on-square.svg" alt="Arrow Down On Square" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/08_arrow-down-tray.svg" alt="Arrow Down Tray" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/09_arrow-left.svg" alt="Arrow Left" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/10_arrow-left-circle.svg" alt="Arrow Left Circle" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/11_arrow-left-on-rectangle.svg" alt="Arrow Left On Rectangle" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/12_arrow-long-down.svg" alt="Arrow Long Down" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/13_arrow-long-left.svg" alt="Arrow Long Left" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/14_arrow-long-right.svg" alt="Arrow Long Right" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/15_arrow-long-up.svg" alt="Arrow Long Up" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/16_arrow-path.svg" alt="Arrow Path" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/17_arrow-path-rounded-square.svg" alt="Arrow Path Rounded Square" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/18_arrow-right.svg" alt="Arrow Right" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/19_arrow-right-circle.svg" alt="Arrow Right Circle" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/20_arrow-right-on-rectangle.svg" alt="Arrow Right On Rectangle" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/21_arrow-small-down.svg" alt="Arrow Small Down" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/22_arrow-small-left.svg" alt="Arrow Small Left" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/23_arrow-small-right.svg" alt="Arrow Small Right" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/24_arrow-small-up.svg" alt="Arrow Small Up" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/25_arrow-up-circle.svg" alt="Arrow Up Circle" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/26_arrow-up-tray.svg" alt="Arrow Up Tray" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/27_arrows-pointing-in.svg" alt="Arrows Pointing In" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/28_arrows-pointing-out.svg" alt="Arrows Pointing Out" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/29_arrows-right-left.svg" alt="Arrows Right Left" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/30_arrows-up-down.svg" alt="Arrows Up Down" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/31_backspace.svg" alt="Backspace" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/32_backward.svg" alt="Backward" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/33_bars-2.svg" alt="Bars 2" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/34_bars-3.svg" alt="Bars 3" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/35_bars-3-bottom-left.svg" alt="Bars 3 Bottom Left" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/36_bars-3-bottom-right.svg" alt="Bars 3 Bottom Right" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/37_bars-3-center-left.svg" alt="Bars 3 Center Left" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/38_bars-arrow-down.svg" alt="Bars Arrow Down" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/39_bars-arrow-up.svg" alt="Bars Arrow Up" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/40_battery-0.svg" alt="Battery 0" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/41_battery-100.svg" alt="Battery 100" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/42_battery-50.svg" alt="Battery 50" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/43_radio.svg" alt="Radio" className="w-5.5 h-5.5" />
                </div>

                {/* Row 2 */}
                <div className="flex flex-wrap gap-4 w-full justify-start">
                  <img src="/assets/icons/44_bell.svg" alt="Bell" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/45_bell-alert.svg" alt="Bell Alert" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/46_bell-slash.svg" alt="Bell Slash" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/47_bolt.svg" alt="Bolt" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/48_book-open.svg" alt="Book Open" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/49_bookmark.svg" alt="Bookmark" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/50_bookmark-square.svg" alt="Bookmark Square" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/51_briefcase.svg" alt="Briefcase" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/52_bug-ant.svg" alt="Bug Ant" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/53_building-library.svg" alt="Building Library" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/54_building-office-2.svg" alt="Building Office 2" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/55_calculator.svg" alt="Calculator" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/56_calendar.svg" alt="Calendar" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/57_calendar-days.svg" alt="Calendar Days" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/58_camera.svg" alt="Camera" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/59_chart-bar.svg" alt="Chart Bar" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/60_chart-bar-square.svg" alt="Chart Bar Square" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/61_chart-pie.svg" alt="Chart Pie" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/62_chat-bubble-bottom-center.svg" alt="Chat Bubble Bottom Center" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/63_chat-bubble-bottom-center-text.svg" alt="Chat Bubble Bottom Center Text" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/64_chat-bubble-left.svg" alt="Chat Bubble Left" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/65_chat-bubble-left-ellipsis.svg" alt="Chat Bubble Left Ellipsis" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/66_chat-bubble-left-right.svg" alt="Chat Bubble Left Right" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/67_chat-bubble-oval-left.svg" alt="Chat Bubble Oval Left" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/68_chat-bubble-oval-left-ellipsis.svg" alt="Chat Bubble Oval Left Ellipsis" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/69_check.svg" alt="Check" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/70_check-badge.svg" alt="Check Badge" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/71_check-circle.svg" alt="Check Circle" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/72_chevron-double-down.svg" alt="Chevron Double Down" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/73_chevron-double-left.svg" alt="Chevron Double Left" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/74_chevron-double-right.svg" alt="Chevron Double Right" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/75_chevron-double-up.svg" alt="Chevron Double Up" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/76_chevron-down.svg" alt="Chevron Down" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/77_chevron-left.svg" alt="Chevron Left" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/78_chevron-right.svg" alt="Chevron Right" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/79_chevron-up.svg" alt="Chevron Up" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/80_chevron-up-down.svg" alt="Chevron Up Down" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/81_circle-stack.svg" alt="Circle Stack" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/82_clipboard-document.svg" alt="Clipboard Document" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/83_clock.svg" alt="Clock" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/84_cloud-arrow-down.svg" alt="Cloud Arrow Down" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/85_beaker.svg" alt="Beaker" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/86_x-circle.svg" alt="X Circle" className="w-5.5 h-5.5" />
                </div>

                {/* Row 3 */}
                <div className="flex flex-wrap gap-4 w-full justify-start">
                  <img src="/assets/icons/87_code-bracket.svg" alt="Code Bracket" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/88_code-bracket-square.svg" alt="Code Bracket Square" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/89_cog.svg" alt="Cog" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/90_cog-6-tooth.svg" alt="Cog 6 Tooth" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/91_command-line.svg" alt="Command Line" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/92_computer-desktop.svg" alt="Computer Desktop" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/93_cpu-chip.svg" alt="CPU Chip" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/94_credit-card.svg" alt="Credit Card" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/95_cube.svg" alt="Cube" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/96_cube-transparent.svg" alt="Cube Transparent" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/97_currency-dollar.svg" alt="Currency Dollar" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/98_currency-euro.svg" alt="Currency Euro" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/99_currency-pound.svg" alt="Currency Pound" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/100_currency-rupee.svg" alt="Currency Rupee" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/101_currency-yen.svg" alt="Currency Yen" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/102_device-phone-mobile.svg" alt="Device Phone Mobile" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/103_device-tablet.svg" alt="Device Tablet" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/104_document-check.svg" alt="Document Check" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/105_document-duplicate.svg" alt="Document Duplicate" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/106_ellipsis-horizontal.svg" alt="Ellipsis Horizontal" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/107_ellipsis-horizontal-circle.svg" alt="Ellipsis Horizontal Circle" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/108_ellipsis-vertical.svg" alt="Ellipsis Vertical" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/109_envelope.svg" alt="Envelope" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/110_exclaimation-circle.svg" alt="Exclamation Circle" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/111_exclamation-triangle.svg" alt="Exclamation Triangle" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/112_eye.svg" alt="Eye" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/113_eye-dropper.svg" alt="Eye Dropper" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/114_eye-slash.svg" alt="Eye Slash" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/115_face-frown.svg" alt="Face Frown" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/116_face-smile.svg" alt="Face Smile" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/117_film.svg" alt="Film" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/118_finger-print.svg" alt="Finger Print" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/119_fire.svg" alt="Fire" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/120_flag.svg" alt="Flag" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/121_folder.svg" alt="Folder" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/122_folder-arrow-down.svg" alt="Folder Arrow Down" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/123_folder-minus.svg" alt="Folder Minus" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/124_folder-open.svg" alt="Folder Open" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/125_folder-plus.svg" alt="Folder Plus" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/126_forward.svg" alt="Forward" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/127_funnel.svg" alt="Funnel" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/128_gift.svg" alt="Gift" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/129_globe-alt.svg" alt="Globe Alt" className="w-5.5 h-5.5" />
                </div>

                {/* Row 4 */}
                <div className="flex flex-wrap gap-4 w-full justify-start">
                  <img src="/assets/icons/130_hand-thumb-down.svg" alt="Hand Thumb Down" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/131_hand-thumb-up.svg" alt="Hand Thumb Up" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/132_hashtag.svg" alt="Hashtag" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/133_heart.svg" alt="Heart" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/134_home.svg" alt="Home" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/135_identification.svg" alt="Identification" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/136_information-circle.svg" alt="Information Circle" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/137_key.svg" alt="Key" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/138_lifebuoy.svg" alt="Lifebuoy" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/139_light-bulb.svg" alt="Light Bulb" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/140_link.svg" alt="Link" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/141_list-bullet.svg" alt="List Bullet" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/142_lock-closed.svg" alt="Lock Closed" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/143_lock-open.svg" alt="Lock Open" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/144_magnifying-glass.svg" alt="Magnifying Glass" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/145_magnifying-glass-plus.svg" alt="Magnifying Glass Plus" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/146_magnifying-glass-minus.svg" alt="Magnifying Glass Minus" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/147_map.svg" alt="Map" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/148_map-pin.svg" alt="Map Pin" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/149_megaphone.svg" alt="Megaphone" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/150_microphone.svg" alt="Microphone" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/151_minus-circle.svg" alt="Minus Circle" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/152_moon.svg" alt="Moon" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/153_musical-note.svg" alt="Musical Note" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/154_no-symbol.svg" alt="No Symbol" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/155_paint-brush.svg" alt="Paint Brush" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/156_paper-airplane.svg" alt="Paper Airplane" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/157_paper-clip.svg" alt="Paper Clip" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/158_pause-circle.svg" alt="Pause Circle" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/159_pencil.svg" alt="Pencil" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/160_pencil-square.svg" alt="Pencil Square" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/161_phone.svg" alt="Phone" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/162_photo.svg" alt="Photo" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/163_play.svg" alt="Play" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/164_play-circle.svg" alt="Play Circle" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/165_play-pause.svg" alt="Play Pause" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/166_plus-circle.svg" alt="Plus Circle" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/167_power.svg" alt="Power" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/168_presentation-chart-bar.svg" alt="Presentation Chart Bar" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/169_presentation-chart-line.svg" alt="Presentation Chart Line" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/170_question-mark-circle.svg" alt="Question Mark Circle" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/171_qr-code.svg" alt="QR Code" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/172_cloud-arrow-up.svg" alt="Cloud Arrow Up" className="w-5.5 h-5.5" />
                </div>

                {/* Row 5 */}
                <div className="flex flex-wrap gap-4 w-full justify-start">
                  <img src="/assets/icons/173_rectangle-stack.svg" alt="Rectangle Stack" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/174_rocket-launch.svg" alt="Rocket Launch" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/175_rss.svg" alt="RSS" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/176_scale.svg" alt="Scale" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/177_server.svg" alt="Server" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/178_server-stack.svg" alt="Server Stack" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/179_share.svg" alt="Share" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/180_shield-check.svg" alt="Shield Check" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/181_shield-exclamation.svg" alt="Shield Exclamation" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/182_shopping-bag.svg" alt="Shopping Bag" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/183_shopping-cart.svg" alt="Shopping Cart" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/184_signal.svg" alt="Signal" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/185_signal-slash.svg" alt="Signal Slash" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/186_sparkles.svg" alt="Sparkles" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/187_speaker-wave.svg" alt="Speaker Wave" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/188_speaker-x-mark.svg" alt="Speaker X Mark" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/189_square-2-stack.svg" alt="Square 2 Stack" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/190_squares-2x2.svg" alt="Squares 2x2" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/191_squares-plus.svg" alt="Squares Plus" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/192_square-3-stack-3d.svg" alt="Square 3 Stack 3D" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/193_star.svg" alt="Star" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/194_stop.svg" alt="Stop" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/195_stop-circle.svg" alt="Stop Circle" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/196_sun.svg" alt="Sun" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/197_swatch.svg" alt="Swatch" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/198_tag.svg" alt="Tag" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/199_ticket.svg" alt="Ticket" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/200_trophy.svg" alt="Trophy" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/201_tv.svg" alt="TV" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/202_user.svg" alt="User" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/203_user-circle.svg" alt="User Circle" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/204_user-group.svg" alt="User Group" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/205_user-minus.svg" alt="User Minus" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/206_user-plus.svg" alt="User Plus" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/207_users.svg" alt="Users" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/208_video-camera.svg" alt="Video Camera" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/209_viewfinder-dot.svg" alt="Viewfinder Dot" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/210_wallet.svg" alt="Wallet" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/211_wifi.svg" alt="Wifi" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/212_video-camera-slash.svg" alt="Video Camera Slash" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/213_wrench.svg" alt="Wrench" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/214_wrench-screwdriver.svg" alt="Wrench Screwdriver" className="w-5.5 h-5.5" />
                  <img src="/assets/icons/215_clipboard-document-check.svg" alt="Clipboard Document Check" className="w-5.5 h-5.5" />
                </div>
              </div>
            </div>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}