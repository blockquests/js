import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/layout/layout';
import { CampaignsPage } from './pages/business/campaigns/campaigns.page';
import { ProfilePage } from './pages/business/profile/profile.page';
import { CreatePage } from './pages/campaign/create/create.page';
import { DetailPage } from './pages/campaign/detail/detail.page';
import { ExplorePage } from './pages/explore/explore.page';
import { HomePage } from './pages/home/home.page';
import { ClaimedPage } from './pages/profile/claimed/claimed.page';
import { ProgressPage } from './pages/profile/progress/progress.page';
import { WhiteListPage } from './pages/profile/whitelist/whitelist.page';

export function AppRouter() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='explore' element={<ExplorePage />} />
          <Route path='business'>
            <Route path='profile' element={<ProfilePage />} />
            <Route index element={<CampaignsPage />} />
          </Route>
          <Route path='campaign'>
            <Route path=':campaignId' element={<DetailPage />} />
            <Route index element={<CreatePage />} />
          </Route>
          <Route path='profile'>
            <Route path='progress' element={<ProgressPage />} />
            <Route path='whitelist' element={<WhiteListPage />} />
            <Route index element={<ClaimedPage />} />
          </Route>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}
