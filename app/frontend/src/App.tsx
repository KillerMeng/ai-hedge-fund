import { useState } from 'react';
import { Flow } from './components/flow';
import { Layout } from './components/layout';
import { useTranslation } from 'react-i18next';


export default function App() {
  const { t } = useTranslation();
  const [showLeftSidebar] = useState(false);
  const [showRightSidebar] = useState(false);

  return (
    <Layout
      leftSidebar={showLeftSidebar ? <div className="p-4 text-white">{t('Left Sidebar Content')}</div> : undefined}
      rightSidebar={showRightSidebar ? <div className="p-4 text-white">{t('Right Sidebar Content')}</div> : undefined}
    >
      <Flow />
    </Layout>
  );
}
