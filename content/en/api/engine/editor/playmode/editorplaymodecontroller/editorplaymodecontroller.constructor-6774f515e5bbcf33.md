---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6774f515e5bbcf33beacc699520c47fb9889c56ea4aad66ea251b16b39756ea2
symbol: engine:Inno.Editor.PlayMode:M:Inno.Editor.PlayMode.EditorPlayModeController.#ctor(Inno.Runtime.EngineHost,Inno.Runtime.RuntimeSessionOptions,Inno.Editor.Scene.IEditorScenePlayMode,Inno.Editor.Scripting.IEditorScriptCompilation,Inno.Editor.Interactions.IEditorHistoryIsolation,Inno.Core.Logging.LogRouter,Inno.Editor.Audio.IEditorAudioHost)
title: EditorPlayModeController.Constructor
kind: api
owners:
- Inno.Editor.PlayMode
apiSurface: source-clr
reviewed: 81d369402e9bee6bff7f3e4b9219554b098c8b60b0c5862e52b868640ac14476
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `engineHost`:** The application host that owns every isolated Play Mode runtime session.

**Parameter `runtimeOptions`:** The validated Play Mode storage and timing policy used for every accepted request.

**Parameter `scenes`:** The scene workspace that creates isolated runtime scene sessions.

**Parameter `scripting`:** The script compilation service that publishes generation readiness.

**Parameter `history`:** The editor history boundary isolated during simulation.

**Parameter `logs`:** The application log router that receives Play Mode lifecycle failures.

**Parameter `audio`:** Optional Editor audio host that creates an isolated backend generation for Play Mode.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when any dependency is `null`.
