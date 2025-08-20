import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Illarion() {
  const [activeTab, setActiveTab] = useState('profile');

  const friends = [
    { name: 'Герой Думбадзе', status: 'Мой верный ученик', avatar: '👨‍💼' },
    { name: 'Бабушка', status: 'Мудрая женщина', avatar: '👵' },
    { name: 'Илико', status: 'Добрый товарищ', avatar: '👨' },
    { name: 'Старый Гиорги', status: 'Сосед и друг', avatar: '🧓' },
    { name: 'Учитель Важа', status: 'Коллега по мудрости', avatar: '👨‍🏫' }
  ];

  const photos = [
    { src: '/img/1a392433-90fc-4d3e-8823-76f3d7b17090.jpg', desc: 'Мой портрет' },
    { src: '/img/a25566db-dd8c-4c94-b0f3-90c6852f91fa.jpg', desc: 'Любимые места' },
    { src: 'https://picsum.photos/200/200?random=5', desc: 'В библиотеке' },
    { src: 'https://picsum.photos/200/200?random=6', desc: 'С учениками' },
    { src: 'https://picsum.photos/200/200?random=7', desc: 'Старые книги' },
    { src: 'https://picsum.photos/200/200?random=8', desc: 'Семейные реликвии' }
  ];

  const posts = [
    {
      id: 1,
      text: 'Мудрость приходит не с возрастом, а с пониманием. Сегодня долго беседовал с молодым героем о том, что значит быть честным перед собой. Иногда самые важные уроки жизни скрыты в простых вещах.',
      time: '1 час назад',
      likes: 28,
      comments: 7
    },
    {
      id: 2,
      text: 'Читал Руставели под старым дубом. Каждый раз, когда возвращаюсь к "Витязю в тигровой шкуре", открываю новые смыслы. Литература - это диалог через века.',
      time: '4 часа назад',
      likes: 35,
      comments: 12
    },
    {
      id: 3,
      text: 'Бабушка принесла свежий чурчхелу. Мы сидели на веранде и вспоминали старые времена. В её глазах столько историй - целая библиотека жизни.',
      time: '2 дня назад',
      likes: 24,
      comments: 9
    },
    {
      id: 4,
      text: 'Учить - значит учиться. Каждый день мои ученики преподают мне новые уроки о том, как видеть мир свежими глазами. Молодость - это не возраст, это способность удивляться.',
      time: '3 дня назад',
      likes: 41,
      comments: 15
    }
  ];

  const handleGoBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={handleGoBack}
                className="text-blue-700 hover:text-blue-900 hover:bg-blue-100"
              >
                <Icon name="ArrowLeft" size={20} />
                Вернуться
              </Button>
              <div className="text-2xl font-bold text-blue-800" style={{ fontFamily: 'serif' }}>
                Профиль Иллариона
              </div>
            </div>
            <div className="flex items-center gap-3">
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
            <Card className="bg-white/70 backdrop-blur-sm border-blue-200 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-24 h-24 mb-4 ring-4 ring-blue-200">
                    <AvatarImage src="/img/1a392433-90fc-4d3e-8823-76f3d7b17090.jpg" />
                    <AvatarFallback className="bg-blue-100 text-blue-800 text-2xl">И</AvatarFallback>
                  </Avatar>
                  <h2 className="text-2xl font-bold text-blue-900 mb-2" style={{ fontFamily: 'serif' }}>
                    Илларион
                  </h2>
                  <p className="text-blue-700 mb-4">Мудрый наставник и учитель</p>
                  <div className="flex gap-2 mb-4 flex-wrap justify-center">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">Философ</Badge>
                    <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">Учитель</Badge>
                    <Badge variant="secondary" className="bg-sky-100 text-sky-800">Мудрец</Badge>
                  </div>
                  <div className="w-full space-y-2 text-sm text-blue-700">
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} />
                      <span>Тбилиси, Грузия</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} />
                      <span>Возраст мудрости</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="BookOpen" size={16} />
                      <span>Преподает жизненную мудрость</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Heart" size={16} />
                      <span>Любит классическую поэзию</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <Card className="mt-4 bg-white/70 backdrop-blur-sm border-blue-200">
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
              <Card className="bg-white/70 backdrop-blur-sm border-blue-200 shadow-lg">
                <CardHeader>
                  <h3 className="text-2xl font-bold text-blue-900" style={{ fontFamily: 'serif' }}>О себе</h3>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="prose prose-blue max-w-none">
                    <p className="text-blue-800 leading-relaxed text-lg">
                      Я прожил долгую жизнь, полную размышлений и открытий. Моя роль - быть мостом между 
                      поколениями, передавать мудрость предков и помогать молодым найти свой путь. 
                      В каждом человеке я вижу искру божественного света, которую нужно лишь разжечь.
                    </p>
                    <p className="text-blue-700 leading-relaxed">
                      Годы научили меня терпению и пониманию. Я верю, что истинное образование - это не 
                      заполнение головы фактами, а зажигание огня любознательности и мудрости в сердце.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-3">Мои интересы и занятия</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Icon name="BookOpen" size={20} className="text-blue-700" />
                        <span className="text-blue-800">Изучение древних текстов</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Users" size={20} className="text-blue-700" />
                        <span className="text-blue-800">Наставничество молодёжи</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Sparkles" size={20} className="text-blue-700" />
                        <span className="text-blue-800">Философские беседы</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Leaf" size={20} className="text-blue-700" />
                        <span className="text-blue-800">Садоводство и созерцание</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Pen" size={20} className="text-blue-700" />
                        <span className="text-blue-800">Письмо и каллиграфия</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Star" size={20} className="text-blue-700" />
                        <span className="text-blue-800">Астрономия</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-lg border border-blue-300">
                    <h4 className="font-semibold text-blue-900 mb-2">Моя жизненная философия</h4>
                    <blockquote className="text-blue-800 italic text-lg">
                      "Мудрость не в том, чтобы знать все ответы, а в том, чтобы задавать правильные вопросы. 
                      Каждый день - это страница в книге жизни, которую мы пишем своими поступками."
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'friends' && (
              <Card className="bg-white/70 backdrop-blur-sm border-blue-200 shadow-lg">
                <CardHeader>
                  <h3 className="text-2xl font-bold text-blue-900" style={{ fontFamily: 'serif' }}>Мои друзья и ученики</h3>
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
              <Card className="bg-white/70 backdrop-blur-sm border-blue-200 shadow-lg">
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
                  <Card key={post.id} className="bg-white/70 backdrop-blur-sm border-blue-200 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src="/img/1a392433-90fc-4d3e-8823-76f3d7b17090.jpg" />
                          <AvatarFallback className="bg-blue-100 text-blue-800">И</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold text-blue-900">Илларион</h4>
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