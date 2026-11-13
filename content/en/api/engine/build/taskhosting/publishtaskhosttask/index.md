---
uid: api.inno.build.taskhosting.16b3e5e4461b4feb
symbol: "engine:Inno.Build.TaskHosting:T:Inno.Build.TaskHosting.PublishTaskHostTask"
source: xml
reviewed: 276bb8cb1db66e8b80ae01ad82f0cb0404eae40a4fb9c32154320a7515b52051
title: "PublishTaskHostTask"
kind: api
owners: [Inno.Build.TaskHosting]
apiSurface: source-clr
contracts:
- project.inno-build-taskhosting
aliases: []
---

Publishes one immutable task runtime per content identity before a build loads its private closure. This bootstrap depends only on filesystem primitives and never loads the task runtime being built.
