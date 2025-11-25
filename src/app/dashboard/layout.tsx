import {
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import {ReactNode} from "react";
import {cn} from "@/lib/utils";

const navigation = [
  { name: '测评列表', href: '#', icon: HomeIcon, count: '5', current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
]

export default function Layout({children}: {children: ReactNode}) {
  return (
    <div className={'flex gap-10 h-screen'}>
      <div className="relative flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 max-w-xs h-full">
        <nav className="relative flex flex-1 flex-col py-10">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={cn(
                        item.current
                          ? 'bg-gray-50 text-indigo-600'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                        'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                      )}
                    >
                      <item.icon
                        aria-hidden="true"
                        className={cn(
                          item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                          'size-6 shrink-0',
                        )}
                      />
                      {item.name}
                      {item.count ? (
                        <span
                          aria-hidden="true"
                          className="ml-auto w-9 min-w-max rounded-full bg-white px-2.5 py-0.5 text-center text-xs/5 font-medium whitespace-nowrap text-gray-600 outline-1 -outline-offset-1 outline-gray-200"
                        >
                        {item.count}
                      </span>
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div className={'py-10'}>
        {children}
      </div>
    </div>
  )
}
