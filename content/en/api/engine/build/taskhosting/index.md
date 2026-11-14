---
uid: api.directory.engine.build.taskhosting
title: "TaskHosting"
kind: landing
owners: []
---

# TaskHosting

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [BuildTaskRuntimeTask](buildtaskruntimetask/index.md) | Coordinates shared task-runtime compilation before immutable publication and private loading. |
| [MaterializeBindingsTask](materializebindingstask/index.md) | Copies one protected generated source into the consuming SDK build&#39;s own intermediate directory. |
| [PublishTaskHostTask](publishtaskhosttask/index.md) | Publishes one immutable task runtime per content identity before a build loads its private closure. This bootstrap depends only on filesystem primitives and never loads the task runtime being built. |
| [RegisterTaskPublisherTask](registertaskpublishertask/index.md) | Registers the lightweight publisher&#39;s process owner before any task uses its private load directory. |
| [RestoreOwnedProjectTask](restoreownedprojecttask/index.md) | Coordinates SDK restore writes for explicitly selected project closures. Parent solution entry points are excluded from these owned restores. |
| [TaskRuntimeBootstrapOwner](taskruntimebootstrapowner/index.md) | Claims bootstrap storage before SDK compilation without depending on the full task runtime. |

