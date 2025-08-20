import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeTab, setActiveTab] = useState('profile');

  const friends = [
    { name: 'Бабушка', status: 'Хранительница семейных традиций', avatar: '👵' },
    { name: 'Илико', status: 'Верный спутник', avatar: '👨' },
    { name: 'Илларион', status: 'Мудрый наставник', avatar: '🧓' },
    { name: 'Соседка Тамара', status: 'Рассказчица историй', avatar: '👩' }
  ];

  const photos = [
    { src: '/img/f80ec9d1-c73d-41eb-b0b6-5d2b73c3c295.jpg', desc: 'Портрет героя' },
    { src: '/img/a25566db-dd8c-4c94-b0f3-90c6852f91fa.jpg', desc: 'Родные места' },
    { src: 'https://picsum.photos/200/200?random=3', desc: 'Семейные воспоминания' },
    { src: 'https://picsum.photos/200/200?random=4', desc: 'Дом детства' }
  ];

  const posts = [
    {
      id: 1,
      text: 'Сегодня помогал бабушке в саду. Она рассказывала мне старые истории о нашей семье. Каждое слово - как драгоценный камень.',
      time: '2 часа назад',
      likes: 15,
      comments: 3
    },
    {
      id: 2,
      text: 'Читаю книгу Важа Пшавелы. Его стихи напоминают мне о силе нашей земли и народа. Поэзия - это музыка души.',
      time: '1 день назад',
      likes: 22,
      comments: 5
    },
    {
      id: 3,
      text: 'С Илико отправились к реке. Он научил меня новой технике рыбалки. Природа - лучший учитель терпения.',
      time: '3 дня назад',
      likes: 18,
      comments: 7
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-blue-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-blue-800" style={{ fontFamily: 'serif' }}>
                ВКонтакте
              </div>
              <div className="text-sm text-blue-600">Литературная социальная сеть</div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                onClick={() => window.location.href = '/illarion'}
                className="text-blue-700 hover:text-blue-900 hover:bg-blue-100"
              >
                <Icon name="Users" size={16} className="mr-2" />
                К Иллариону
              </Button>
              <Icon name="Search" className="text-blue-700 hover:text-blue-900 cursor-pointer" size={20} />
              <Icon name="Bell" className="text-blue-700 hover:text-blue-900 cursor-pointer" size={20} />
              <Icon name="Settings" className="text-blue-700 hover:text-blue-900 cursor-pointer" size={20} />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-12 lg:col-span-3">
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-24 h-24 mb-4 ring-4 ring-blue-200">
                    <AvatarImage src="/img/f80ec9d1-c73d-41eb-b0b6-5d2b73c3c295.jpg" />
                    <AvatarFallback className="bg-blue-100 text-blue-800 text-2xl">Г</AvatarFallback>
                  </Avatar>
                  <h2 className="text-2xl font-bold text-blue-900 mb-2" style={{ fontFamily: 'serif' }}>
                    Герой Думбадзе
                  </h2>
                  <p className="text-blue-700 mb-4">Искатель истин жизни</p>
                  <div className="flex gap-2 mb-4">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">Мечтатель</Badge>
                    <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">Философ</Badge>
                  </div>
                  <div className="w-full space-y-2 text-sm text-blue-700">
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} />
                      <span>Грузия</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} />
                      <span>Родился в 1928</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Heart" size={16} />
                      <span>В отношениях с литературой</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <Card className="mt-4 bg-white/80 backdrop-blur-sm border-blue-200">
              <CardContent className="p-4">
                <nav className="space-y-2">
                  {[
                    { id: 'profile', label: 'Профиль', icon: 'User' },
                    { id: 'friends', label: 'Друзья', icon: 'Users' },
                    { id: 'photos', label: 'Фотографии', icon: 'Camera' },
                    { id: 'posts', label: 'Записи', icon: 'FileText' }
                  ].map((item) => (
                    <Button
                      key={item.id}
                      variant={activeTab === item.id ? "default" : "ghost"}
                      className={`w-full justify-start gap-2 ${
                        activeTab === item.id 
                          ? 'bg-blue-200 text-blue-900 hover:bg-blue-300' 
                          : 'text-blue-700 hover:bg-blue-100'
                      }`}
                      onClick={() => setActiveTab(item.id)}
                    >
                      <Icon name={item.icon as any} size={16} />
                      {item.label}
                    </Button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="col-span-12 lg:col-span-9">
            {activeTab === 'profile' && (
              <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-lg">
                <CardHeader>
                  <h3 className="text-2xl font-bold text-blue-900" style={{ fontFamily: 'serif' }}>О себе</h3>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="prose prose-amber max-w-none">
                    <p className="text-blue-800 leading-relaxed text-lg">
                      Я живу в мире, где каждый день приносит новые открытия. Моя бабушка - источник мудрости, 
                      Илико и Илларион - верные спутники в познании жизни. Мы вместе исследуем тайны бытия, 
                      находим красоту в простых вещах и учимся понимать друг друга.
                    </p>
                    <p className="text-blue-700 leading-relaxed">
                      Литература для меня не просто увлечение - это способ понять мир и себя в нём. 
                      Каждая прочитанная страница открывает новые горизонты человеческих отношений.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-3">Хобби и увлечения</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Icon name="Book" size={20} className="text-blue-700" />
                        <span className="text-blue-800">Чтение классической литературы</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Feather" size={20} className="text-blue-700" />
                        <span className="text-blue-800">Написание дневника</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="TreePine" size={20} className="text-blue-700" />
                        <span className="text-blue-800">Прогулки по природе</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Music" size={20} className="text-blue-700" />
                        <span className="text-blue-800">Грузинские народные песни</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'friends' && (
              <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-lg">
                <CardHeader>
                  <h3 className="text-2xl font-bold text-blue-900" style={{ fontFamily: 'serif' }}>Друзья</h3>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {friends.map((friend, index) => (
                      <Card key={index} className="bg-blue-50/50 border-blue-200 hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-2xl">
                              {friend.avatar}
                            </div>
                            <div>
                              <h4 className="font-semibold text-blue-900">{friend.name}</h4>
                              <p className="text-sm text-blue-700">{friend.status}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'photos' && (
              <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-lg">
                <CardHeader>
                  <h3 className="text-2xl font-bold text-blue-900" style={{ fontFamily: 'serif' }}>Фотографии</h3>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {photos.map((photo, index) => (
                      <div key={index} className="group cursor-pointer">
                        <div className="aspect-square bg-blue-100 rounded-lg overflow-hidden border-2 border-blue-200 hover:border-blue-400 transition-colors">
                          <img 
                            src={photo.src} 
                            alt={photo.desc}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <p className="text-sm text-blue-700 mt-2 text-center">{photo.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'posts' && (
              <div className="space-y-4">
                {posts.map((post) => (
                  <Card key={post.id} className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src="/img/f80ec9d1-c73d-41eb-b0b6-5d2b73c3c295.jpg" />
                          <AvatarFallback className="bg-blue-100 text-blue-800">Г</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold text-blue-900">Герой Думбадзе</h4>
                            <span className="text-sm text-blue-600">• {post.time}</span>
                          </div>
                          <p className="text-blue-800 leading-relaxed mb-4">{post.text}</p>
                          <div className="flex items-center gap-6 text-blue-700">
                            <button className="flex items-center gap-1 hover:text-blue-900 transition-colors">
                              <Icon name="Heart" size={16} />
                              <span className="text-sm">{post.likes}</span>
                            </button>
                            <button className="flex items-center gap-1 hover:text-blue-900 transition-colors">
                              <Icon name="MessageCircle" size={16} />
                              <span className="text-sm">{post.comments}</span>
                            </button>
                            <button className="flex items-center gap-1 hover:text-blue-900 transition-colors">
                              <Icon name="Share" size={16} />
                              <span className="text-sm">Поделиться</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}