---
uid: api.435bd036e8b6a79029becb590e59f1ab6d046bd44ed3e643f9279a2edc811d0a
symbol: "engine:Inno.Scene:M:Inno.Scene.SceneWorld.EnterScope"
source: xml
reviewed: 6eaf40a02024cb85c635fcd6c0af01f920c60023b903c456d04de112d9d22245
title: "EnterScope"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Binds this world and its identity allocator to the current asynchronous execution context.

**Returns:** A strict last-in-first-out execution scope owned by the caller.

**Exception `T:System.ObjectDisposedException`:** Thrown when this world has been disposed.
