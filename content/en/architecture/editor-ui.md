---
title: How Editor interactions reach engine state
description: Follow one command, gesture or frame through feature, History, presentation and host ownership.
uid: architecture.editor-ui
kind: explanation
owners: [Inno.Editor.Core, Inno.Editor.Interactions, Inno.Editor.ImGui]
contracts: [architecture.editor-generations, architecture.ownership]
---
# How Editor interactions reach engine state

The Editor separates the meaning of an operation from how it is displayed. A Panel composes existing feature services and presentation. A feature owns the actual mutation, validation, recovery and neutral History payload. The host coordinates extension generations and lifetime.

## Follow the execution path

| Boundary | Responsibility |
| --- | --- |
| Foundation | Core Identity, Events, IO and Serialization. |
| Editor Core and Interactions | Context, extension lifecycle, actions, selection, gestures, History and document protocols. |
| Features | Asset, Scene, Shader, scripting, export and other domain operations. |
| Shared presentation | UI session, scopes, input routing, widgets and semantic style. |
| Domain presentation | Asset browser, Shader-node presentation and other domain-specific visuals. |
| Panels | Concrete views composed from those services. |
| Hosting | Product-independent startup, owner lifetime and publication coordination. |

Features do not depend on Panels or native UI. Panels do not use each other as service containers. Graph documents do not acquire Shader/Rendering semantics merely because Shader Editor displays them. The engine's architecture checks enforce these directions; runtime tests separately verify the actual execution/lifetime protocol.

## One command model, many presentations

Menus, toolbars, shortcuts and command search use the same Action Query/Execute contract. They do not each implement enabled/checked business rules. Static action declarations and menu structure are indexed by extension generation; current selection, Missing/Play/read-only state and dynamic menu parameters remain request inputs.

A queued action resolves its target again. `EditorInteraction` and public drop targets are synchronous request borrows, not cross-frame caches or History payloads. Identity objects resolve through Core Identity; other non-neutral values use weak references. A boxed struct or noncollectible declaring assembly does not prove its contents cannot retain plugin objects.

Input belongs to the current focus, popup, modal or capture owner. Text input must not accidentally dispatch an edit command to a list behind it. The product supplies the platform keyboard policy. See [actions](../extending/editor-actions.md) and [selection](../extending/editor-selection.md).

## A gesture is one reversible domain operation

The first effective continuous sample opens `EditorEditGesture`. Features validate and mutate immediately, recording through the shared History owner. Release commits; Escape rolls back. Selection changes first prepare the current interaction and retain the old selection if preparation fails. Owner close or disappearance of an unfinished control rolls back that gesture.

Command, save, Play and reload boundaries use the existing preparation protocol. Two independent drags are two operations; Boolean/create/delete/reorder actions do not borrow a continuous-value merge key. Batch operations normalize roots, validate every owner and compensate already applied changes on failure.

History stores neutral serialized state, not native UI objects or collectible metadata. Missing is a recoverable barrier that preserves bytes and stack position. Query determines current owner/handler availability; Apply performs the actual expected-state check. Earlier samples do not permanently disable Undo just because the live state has advanced. See [History](../extending/editor-history.md) and [asset drafts](../extending/asset-drafts.md).

Multi-object property edits identify the root member and optional scalar component. Scene editing composes values through public fields or Core quaternion operations, retaining each object's independent before-state. The persistent payload remains the same root-property serialization rather than another format.

## Keep presentation state with its owner

Each interaction host owns an `EditorUiSession`; `current` is a synchronous scope accessor, not a global lifetime owner. Frame, window, context and owner-thread borrows cannot escape their scopes. A failed extension unwinds its own Begin/End and push/pop state; it cannot reset another owner's native stack to recover.

The backend selects the context, refreshes display metrics and runs preparation before native NewFrame. Preparation/drawing/publication reject reentry and retirement. Preparation failure opens no frame; drawing failure closes only its owned frame and publishes no partial draw data. Callers still balance the scopes they opened.

Shared style covers semantic surfaces, focus, errors and reusable controls. Console, Hierarchy, Settings and Inspector-specific colors remain internal to their presentation owners; Shader categories and asset layouts belong to their own domain presentation. They do not become script APIs or retain Sessions/types. DPI and user zoom are separate inputs applied once. See [Editor widgets](../extending/editor-widgets.md) and [Console customization](../extending/customize-console.md).

## Make large views incremental without changing behavior

Filtering, ordering, mouse-range selection and keyboard navigation use one visible sequence. Virtualization retains rename, capture, anchor and focus state. Fixed rows submit the visible range; variable-height Console measurements invalidate on content, width, scale or expansion changes. Menus and native child windows use bounded presentation slots rather than allocating permanent native state per historical record.

Graph presentation caches neutral IDs/geometry with document revision, generation and scale. Panning uses transforms; local changes invalidate related geometry. Domain controllers still decide what a connection or move means. Drawing callbacks do not enter long-lived caches.

Measure submitted work, allocation, CPU/GC, median/tail frame time and functional results together. Simulated scale tests do not certify every physical DPI device; higher FPS alone is not correctness evidence.

## Persist layout and retire generations separately

The standard host atomically creates the default layout only when `editor.ini` is absent. An existing deliberately empty file is preserved. Default layout has no sample content, Selection, History or plugin-instance state. Normal shutdown captures Module/Panel state, then current docking layout, then atomically writes the neutral document.

Edit and Asset identity domains are registered at startup. Play's independent allocator is routed through a scoped host registration before candidate preparation. Selection, focus, queued actions and drag/drop resolve through that same route; there is no second global live-object table. Release the temporary route only after returning to Edit and restoring selection successfully. This is host composition, not a script allocator-registration API.

Closing a Panel retires its transient controls; closing a document retires its document state. Generation changes release types, delegates and instances through the existing unload barrier. Pending/faulted retirement retains ownership and blocks unsafe transitions. See [generation transactions](editor-generations.md), [panel authoring](../extending/editor-panels.md) and [host documents](../extending/persist-host-documents.md).
