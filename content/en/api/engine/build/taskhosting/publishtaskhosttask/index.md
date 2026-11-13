---
uid: api.inno.build.taskhosting.16b3e5e4461b4feb
symbol: "engine:Inno.Build.TaskHosting:T:Inno.Build.TaskHosting.PublishTaskHostTask"
source: xml
reviewed: 5c8a59d932a2677c1843e1fc7e71a816f9f6a5e9019ab450099948dd80047134
title: "PublishTaskHostTask"
kind: api
owners: [Inno.Build.TaskHosting]
apiSurface: source-clr
contracts:
- project.inno-build-taskhosting
aliases: []
---

Publishes one immutable task runtime per content identity before a build loads its private closure. This bootstrap depends only on filesystem primitives and never loads the task runtime being built.
