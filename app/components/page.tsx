import ScrollNavigation from '@/components/ScrollNavigation'
import Logo from '@/components/Logo'
import Footer from '@/components/Footer'

export default function ComponentsPage() {
  return (
    <div className="bg-grey-900 min-h-screen">
      <div className="bg-grey-900 relative w-full min-h-screen">
        <div className="relative size-full">
          {/* Scroll Navigation */}
          <ScrollNavigation currentPage="components" currentSection="components" />

          <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start overflow-clip pb-20 pt-0 fixed-padding-container relative size-full">
            {/* Title Section */}
            <div className="bg-grey-900 box-border content-stretch flex flex-col gap-[100px] items-start justify-start overflow-clip pb-2.5 pt-[100px] px-0 relative rounded-3xl shrink-0 content-responsive">
              {/* Title */}
              <div className="box-border content-stretch flex flex-col font-host-grotesk gap-[25px] items-start justify-start p-0 relative text-grey-50 text-left w-full">
                <div className="relative shrink-0 text-text-large">
                  <p className="leading-[1.4]">
                    <span>Components /</span>
                    <span className="text-grey-300"> Overview</span>
                  </p>
                </div>
                <div className="relative shrink-0 text-display-xxl">
                  <h1 className="leading-none tracking-[-4.48px] font-medium">
                    Components
                  </h1>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="box-border content-stretch flex flex-col gap-20 items-start justify-start pt-[100px] pb-[60px] px-0 relative content-responsive">
              {/* Description */}
              <div className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-start p-0 relative">
                <div className="box-border content-stretch flex flex-col font-host-grotesk font-normal gap-4 items-start justify-start p-0 relative">
                  <div className="relative text-grey-50 text-heading-medium">
                    <h2 className="leading-[1.3] tracking-[-0.64px] font-normal">
                      Component Library
                    </h2>
                  </div>
                  <div className="relative text-grey-300 text-text-large w-full max-w-[700px]">
                    <p className="leading-[1.4]">
                      This section contains reusable UI components that form the foundation of our design system. Each component is designed to be flexible and customizable to meet your brand needs.
                    </p>
                  </div>
                </div>
                <div className="box-border content-stretch flex flex-col font-ibm-plex-sans-jp font-normal gap-6 items-start justify-start p-0 relative">
                  <div className="relative text-grey-50 text-heading-small">
                    <h2 className="leading-[1.4] tracking-[-0.48px] font-normal">
                      コンポーネントライブラリ
                    </h2>
                  </div>
                  <div className="relative text-grey-300 text-text-large w-full max-w-[700px]">
                    <p className="leading-[1.4]">
                      このセクションには、デザインシステムの基盤となる再利用可能なUIコンポーネントが含まれています。各コンポーネントは柔軟でカスタマイズ可能に設計されており、ブランドのニーズに合わせて調整できます。
                    </p>
                  </div>
                </div>
              </div>

              {/* Component Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {/* Buttons Card */}
                <div className="bg-grey-600 rounded-2xl p-8 border border-grey-300/20 hover:border-grey-300/40 transition-colors">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center">
                      <span className="text-grey-white text-xl">🔘</span>
                    </div>
                    <div>
                      <h3 className="text-grey-50 text-xl font-host-grotesk font-medium mb-2">
                        Buttons
                      </h3>
                      <p className="text-grey-300 text-sm leading-[1.4]">
                        Interactive button components with various states and styles
                      </p>
                    </div>
                    <a 
                      href="/components/buttons" 
                      className="inline-flex items-center text-grey-50 hover:text-grey-white transition-colors text-sm font-medium"
                    >
                      View Components →
                    </a>
                  </div>
                </div>

                {/* Coming Soon Cards */}
                {['Forms', 'Cards', 'Navigation', 'Modals', 'Tables'].map((component) => (
                  <div key={component} className="bg-grey-600/50 rounded-2xl p-8 border border-grey-300/10">
                    <div className="flex flex-col gap-4">
                      <div className="w-12 h-12 bg-grey-300/20 rounded-lg flex items-center justify-center">
                        <span className="text-grey-300 text-xl">⏳</span>
                      </div>
                      <div>
                        <h3 className="text-grey-300 text-xl font-host-grotesk font-medium mb-2">
                          {component}
                        </h3>
                        <p className="text-grey-300/70 text-sm leading-[1.4]">
                          Coming soon...
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}