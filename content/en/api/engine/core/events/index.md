---
uid: api.directory.engine.core.events
title: "Events"
kind: landing
owners: []
---

# Events

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [ApplicationEvent](applicationevent/index.md) | Base class for application lifecycle events. |
| [ApplicationQuitEvent](applicationquitevent/index.md) | Raised when the application requests shutdown. |
| [ApplicationSuspensionChangedEvent](applicationsuspensionchangedevent/index.md) | Reports whether the application must stop advancing frames until the platform resumes it. |
| [Event](event/index.md) | Base type for all engine events. |
| [EventDispatcher](eventdispatcher/index.md) | Thread-safe event dispatcher that owns a set of T:Inno.Core.Events.EventHub instances and routes events to hubs in descending P:Inno.Core.Events.EventHub.order. |
| [EventHub](eventhub/index.md) | A disposable subscription hub bound to a single T:Inno.Core.Events.EventDispatcher. |
| [KeyEvent](keyevent/index.md) | Base class for keyboard events. |
| [KeyPressedEvent](keypressedevent/index.md) | Raised when a key is pressed. |
| [KeyReleasedEvent](keyreleasedevent/index.md) | Raised when a key is released. |
| [MouseButtonEvent](mousebuttonevent/index.md) | Base class for mouse button events. |
| [MouseButtonPressedEvent](mousebuttonpressedevent/index.md) | Raised when a mouse button is pressed. |
| [MouseButtonReleasedEvent](mousebuttonreleasedevent/index.md) | Raised when a mouse button is released. |
| [MouseEvent](mouseevent/index.md) | Base class for mouse events. |
| [MouseMovedEvent](mousemovedevent/index.md) | Raised when the cursor moves. |
| [MouseScrolledEvent](mousescrolledevent/index.md) | Raised when mouse wheel scrolls. |
| [TextInputEvent](textinputevent/index.md) | Raised when the platform commits UTF-8 text through keyboard, IME, or virtual-keyboard input. |
| [WindowCloseEvent](windowcloseevent/index.md) | Raised when the window requests close. |
| [WindowEvent](windowevent/index.md) | Base class for window lifecycle events. |
| [WindowFocusChangedEvent](windowfocuschangedevent/index.md) | Raised when a window gains or loses input focus. |
| [WindowResizeEvent](windowresizeevent/index.md) | Raised when the window size changes. |
| [WindowVisibilityChangedEvent](windowvisibilitychangedevent/index.md) | Reports whether a platform window can present visible content. |

