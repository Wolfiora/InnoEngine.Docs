---
uid: api.inno.editor.core.editor-script.e6206739a08861ad
symbol: "scripting:Inno.Editor.Core:T:InnoEditor.Core.EditorFrame"
source: xml
reviewed: ff0a9bf2afa6e58908f976b18977855dbbaf9895e9bb43908c77747700038daa
title: "EditorFrame"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
contracts:
- api.projects.inno-editor-core#lifecycle-and-failure-contracts
- manual.scripting.use-script-api
aliases: []
---

Describes one immutable editor frame.

## Parameters

**Parameter `deltaTime`:** The elapsed frame time in seconds.

**Parameter `totalTime`:** The absolute editor runtime in seconds.

**Parameter `isFocused`:** Whether an editor viewport owns application focus.
