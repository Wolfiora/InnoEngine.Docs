---
uid: api.6774f515e5bbcf33beacc699520c47fb9889c56ea4aad66ea251b16b39756ea2
symbol: "engine:Inno.Editor.PlayMode:M:Inno.Editor.PlayMode.EditorPlayModeController.#ctor(Inno.Runtime.EngineHost,Inno.Runtime.RuntimeSessionOptions,Inno.Editor.Scene.IEditorScenePlayMode,Inno.Editor.Scripting.IEditorScriptCompilation,Inno.Editor.Interactions.IEditorHistoryIsolation,Inno.Core.Logging.LogRouter,Inno.Editor.Audio.IEditorAudioHost)"
source: xml
reviewed: fbf892f956123ad7c088ff8e2606e250f638736c2a36086b44bcdfc3961402fd
title: "Constructor"
kind: api
owners: [Inno.Editor.PlayMode]
apiSurface: source-clr
---

Creates a Play Mode controller around the runtime host, scene snapshot, scripting, and history boundaries.

**Parameter `engineHost`:** The application host that owns every isolated Play Mode runtime session.

**Parameter `runtimeOptions`:** The validated Play Mode storage and timing policy used for every accepted request.

**Parameter `scenes`:** The scene workspace that creates isolated runtime scene sessions.

**Parameter `scripting`:** The script compilation service that publishes generation readiness.

**Parameter `history`:** The editor history boundary isolated during simulation.

**Parameter `logs`:** The application log router that receives Play Mode lifecycle failures.

**Parameter `audio`:** Optional Editor audio host that creates an isolated backend generation for Play Mode.

**Exception `T:System.ArgumentNullException`:** Thrown when any dependency is `null`.
