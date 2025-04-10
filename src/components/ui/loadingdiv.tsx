import React from 'react'
import MainLayout from '../layout/MainLayout';

function Loadingdiv() {
    return (
        <MainLayout>
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-[500px] bg-gray-100 animate-pulse rounded-lg"></div>
              <div className="space-y-4">
                <div className="h-8 bg-gray-100 animate-pulse rounded w-3/4"></div>
                <div className="h-4 bg-gray-100 animate-pulse rounded w-1/4"></div>
                <div className="h-24 bg-gray-100 animate-pulse rounded"></div>
                <div className="h-10 bg-gray-100 animate-pulse rounded w-1/3"></div>
                <div className="h-12 bg-gray-100 animate-pulse rounded"></div>
              </div>
            </div>
          </div>
        </MainLayout>
      );
}

export default Loadingdiv
