Для запуска нужен web-сервер со следующей конфигурацией:

	* Статические файлы из build/app раздаются на url /app
	* Опционально на другие запросы выдаётся содержание index.html, но с hashHistory это не должно быть обязательно.

В директории /build/web есть минимально сконфигурированный сервер flask для примера (при запуске работает на 127.0.0.1:5000).
