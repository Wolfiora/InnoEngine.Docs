---
uid: api.inno.rendering.runtime-script.28335d45ed4831a2
symbol: "scripting:Inno.Rendering:T:InnoEngine.Rendering.GraphicsApi"
source: xml
reviewed: e17ac20768e3dd2c9d51a43b13f7c5731a2f8784ddec9fa808c22a1784b2d950
title: "GraphicsApi"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-rendering
aliases: []
---

Identifies the graphics API family selected by the host without exposing a backend-native enum. Pipelines use this value only for capability-aware choices and target artifact selection; it does not require separate pipeline or shader source implementations.
