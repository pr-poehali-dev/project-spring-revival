import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">Томская область</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#attractions" className="text-muted-foreground hover:text-foreground transition-colors">
                Достопримечательности
              </a>
              <a href="#categories" className="text-muted-foreground hover:text-foreground transition-colors">
                Категории
              </a>
              <a href="#districts" className="text-muted-foreground hover:text-foreground transition-colors">
                По районам
              </a>
              <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">
                Отзывы
              </a>
            </div>
            <Button variant="outline" size="sm">
              Карта
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[80vh]">
            {/* Основной контент Hero */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit">
                    <Icon name="MapPin" className="w-3 h-3 mr-1" />
                    Гид по Томской области
                  </Badge>
                  <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-balance">
                    Откройте для себя
                    <span className="text-primary block">красоту Томской области</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-2xl text-pretty">
                    Архитектурные шедевры, нетронутая природа, яркие события и богатая культура. 
                    Исследуйте достопримечательности с подробными описаниями, фотогалереями и отзывами путешественников.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8">
                    Смотреть все места
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                    Популярные маршруты
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero сетка изображений */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-2 auto-rows-fr h-fit self-center">
              <Card className="aspect-square bg-secondary overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=400&fit=crop"
                  alt="Деревянная архитектура Томска"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-primary/10 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
                  alt="Природа Томской области"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-accent/10 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=400&h=400&fit=crop"
                  alt="Культурные события"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-secondary overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=400&fit=crop"
                  alt="Панорама Томска"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Секция категорий */}
      <section id="categories" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">КАТЕГОРИИ ДОСТОПРИМЕЧАТЕЛЬНОСТЕЙ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Выберите интересующую вас категорию и откройте для себя уникальные места Томской области
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Building2" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Архитектура</h3>
              <p className="text-muted-foreground">
                Деревянное зодчество, исторические здания и архитектурные памятники Томска
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Trees" className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Природа</h3>
              <p className="text-muted-foreground">
                Заповедники, реки, леса и живописные природные ландшафты региона
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Calendar" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">События</h3>
              <p className="text-muted-foreground">
                Фестивали, соревнования и культурные мероприятия круглый год
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Theater" className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Культура</h3>
              <p className="text-muted-foreground">
                Театры, музеи, галереи и творческие коллективы области
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Сетка достопримечательностей */}
      <section id="attractions" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">ПОПУЛЯРНЫЕ МЕСТА</h2>
            <Button variant="outline">Все места</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
              <div className="aspect-video bg-secondary relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=600&h=400&fit=crop"
                  alt="Деревянная архитектура"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4 bg-primary">Архитектура</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Дом с шатром</h3>
                <p className="text-muted-foreground mb-4">Шедевр деревянного зодчества с уникальной резьбой</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="MapPin" className="w-4 h-4" />
                    Томск, центр
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Star" className="w-4 h-4 fill-current text-yellow-500" />
                    4.8
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
              <div className="aspect-video bg-secondary relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600&h=400&fit=crop"
                  alt="Таёжный заповедник"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4 bg-accent">Природа</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Таёжный заповедник</h3>
                <p className="text-muted-foreground mb-4">Нетронутая природа и экологические тропы</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="MapPin" className="w-4 h-4" />
                    Томский район
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Star" className="w-4 h-4 fill-current text-yellow-500" />
                    4.9
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
              <div className="aspect-video bg-secondary relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=600&h=400&fit=crop"
                  alt="Драматический театр"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4 bg-primary">Культура</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Драматический театр</h3>
                <p className="text-muted-foreground mb-4">Старейший театр Сибири с богатой историей</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="MapPin" className="w-4 h-4" />
                    Томск, центр
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Star" className="w-4 h-4 fill-current text-yellow-500" />
                    4.7
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
              <div className="aspect-video bg-secondary relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=600&h=400&fit=crop"
                  alt="Фестиваль искусств"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4 bg-accent">События</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Праздник топора</h3>
                <p className="text-muted-foreground mb-4">Ежегодный фестиваль деревянной скульптуры</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Calendar" className="w-4 h-4" />
                    Июнь
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Users" className="w-4 h-4" />
                    5000+ гостей
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
              <div className="aspect-video bg-secondary relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=400&fit=crop"
                  alt="Река Томь"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4 bg-accent">Природа</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Набережная реки Томь</h3>
                <p className="text-muted-foreground mb-4">Живописная прогулочная зона вдоль реки</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="MapPin" className="w-4 h-4" />
                    Томск
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Star" className="w-4 h-4 fill-current text-yellow-500" />
                    4.6
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
              <div className="aspect-video bg-secondary relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&h=400&fit=crop"
                  alt="Музей истории"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4 bg-primary">Культура</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Краеведческий музей</h3>
                <p className="text-muted-foreground mb-4">История и культура Томской области</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="MapPin" className="w-4 h-4" />
                    Томск, центр
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Star" className="w-4 h-4 fill-current text-yellow-500" />
                    4.5
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Поиск по районам */}
      <section id="districts" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">ПОИСК ПО РАЙОНАМ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Найдите достопримечательности в нужном вам районе Томской области
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Томск",
              "Асиновский",
              "Бакчарский",
              "Зырянский",
              "Каргасокский",
              "Кожевниковский",
              "Колпашевский",
              "Кривошеинский",
              "Молчановский",
              "Парабельский",
              "Первомайский",
              "Тегульдетский",
            ].map((district) => (
              <Button
                key={district}
                variant="outline"
                className="h-auto py-4 text-base hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {district}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы путешественников */}
      <section id="reviews" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">ОТЗЫВЫ ПУТЕШЕСТВЕННИКОВ</h2>
            <p className="text-xl text-muted-foreground">
              Что говорят те, кто уже открыл для себя красоту Томской области
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" className="w-5 h-5 fill-current text-yellow-500" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "Деревянная архитектура Томска просто восхитительна! Каждый дом — произведение искусства. 
                Обязательно посетите с экскурсией."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="User" className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Анна Волкова</p>
                  <p className="text-sm text-muted-foreground">Москва</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" className="w-5 h-5 fill-current text-yellow-500" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "Природа Томской области невероятна! Таёжные леса, чистые реки — идеально для активного отдыха. 
                Вернёмся ещё."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="User" className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Дмитрий Соколов</p>
                  <p className="text-sm text-muted-foreground">Новосибирск</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" className="w-5 h-5 fill-current text-yellow-500" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "Отличный сайт для планирования поездки! Все места с подробными описаниями и фото. 
                Очень помог в путешествии."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="User" className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Елена Иванова</p>
                  <p className="text-sm text-muted-foreground">Санкт-Петербург</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Начните своё путешествие по Томской области
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Сотни достопримечательностей, подробные описания и отзывы реальных путешественников
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Смотреть все места
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Скачать карту
            </Button>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-secondary/30 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Томская область</h3>
              <p className="text-sm text-muted-foreground">
                Ваш путеводитель по достопримечательностям региона
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Категории</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Архитектура</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Природа</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">События</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Культура</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Популярное</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Томск</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Заповедники</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Музеи</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Фестивали</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>info@tomsk-guide.ru</li>
                <li>+7 (900) 123-45-67</li>
                <li className="flex gap-2 pt-2">
                  <Icon name="Mail" className="w-5 h-5" />
                  <Icon name="Phone" className="w-5 h-5" />
                  <Icon name="MapPin" className="w-5 h-5" />
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Томская область. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
