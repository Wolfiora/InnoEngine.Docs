---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.320a438a8562a4aa8518ace6e8aeecd554e88ad06fd5c6fa30645e04158ebbf2
symbol: scripting:Inno.Audio:M:InnoEngine.Audio.AudioListenerSnapshot.#ctor(System.Guid,System.Int32,InnoEngine.Audio.AudioListenerState,System.Boolean)
title: AudioListenerSnapshot.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: editor-script
reviewed: 26eabcc5395d707cdaeae8a8509e7523543980867c1c90099caff84f210dc6bb
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Creates an immutable listener snapshot.

## Parameters

**Parameter `id`:** Stable listener identity across updates.

**Parameter `priority`:** Selection priority; larger values win.

**Parameter `state`:** Current listener transform.

**Parameter `active`:** Whether the listener is eligible for selection.
