---
title: RmlUi backend
description: Native retained UI integration, authoring boundaries, owner-thread rules and rendering requirements.
uid: backend.rmlui
kind: explanation
owners:
  - Inno.Adapter.UI.RmlUi
  - Inno.Adapter.UI.RmlUi.Authoring
  - Inno.Native.UI
  - Inno.Build.Toolchains.UI
contracts:
  - project.inno-adapter-ui-rmlui#native-session-and-transfer-contract
  - project.inno-native-ui#abi-and-ownership-contract
---
# RmlUi backend

RmlUi supplies retained document layout and interaction for RML/RCSS. InnoEngine wraps it behind the neutral UI service, a separate source authoring adapter and an explicit Native product component. The integration produces render data; a selected product still needs a rendering consumer.

## Choose the path for your task

- [Author and import RML](../manual/ui/author-rml.md).
- [Load and update a document](../manual/ui/use-documents.md).
- [Consume retained rendering data](../extending/ui-render-frames.md).
- [Understand UI lifetime boundaries](../architecture/ui-lifetime.md).

## Availability and limitations

The managed backend advertises RML and does not support arbitrary font collection-face selection. Current imported fonts use face zero. Native availability depends on the selected product, target, deployed library and dependencies; the presence of a project file is not a platform certification.

The source frontend supports controlled stylesheet expansion and font dependency extraction. It is not a browser, a full authoring grammar validator, or a promise that all upstream facilities are exposed. InnoEngine's service exposes typed document operations and events rather than raw third-party DOM objects.

## Owner-thread and shutdown rules

Keep all live native sessions on the process host's selected owner thread and serialize their use. Do not assume asynchronous scope propagation returns to that thread. Native process state retains fonts and shared support until the last session releases it.

Context/document handles belong to their active backend. Stop callbacks and consumers before retirement. Managed frame copies do not own GPU allocations; retire those through the renderer. The current adapter does not retry native destruction after a failed disposal, so preserve cleanup failures and do not reuse the session.

## Failure boundaries

| Boundary | Meaning |
| --- | --- |
| Source analysis | Dependency/font extraction succeeded; full native parsing remains separate. |
| Document load | The selected native backend accepted the document; a renderer must still consume frames. |
| Frame copy | Native deltas are acknowledged only after the managed frame is complete. |
| Event drain | Events are cleared even if copying fails; replay is not guaranteed. |
| Product preparation | Inputs, library closure and deployment must match the selected product. |

## Implementation reference

- [Managed backend](../api/projects/inno-adapter-ui-rmlui.md).
- [Authoring adapter](../api/projects/inno-adapter-ui-rmlui-authoring.md).
- [Native binding contract](../api/projects/inno-native-ui.md).
- [Native toolchain](../api/projects/inno-build-toolchains-ui.md).

The [upstream RmlUi documentation](https://mikke89.github.io/RmlUiDoc/) describes its languages and library. It tracks upstream development; check InnoEngine's pinned dependency and exposed boundary before relying on an upstream feature.
