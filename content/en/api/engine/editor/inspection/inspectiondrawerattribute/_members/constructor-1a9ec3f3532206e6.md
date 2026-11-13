---
uid: api.1a9ec3f3532206e6ff58ca560fac7fd894f34cd0b9aea49a5df98052a5d545ec
symbol: "engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.InspectionDrawerAttribute.#ctor(System.Type,System.Boolean,System.Int32,System.Boolean)"
source: xml
reviewed: 5123e36768567d698fb507ceea623dce2a767a393954e6e0c79b7ae485ef22a2
title: "Constructor"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: source-clr
---

Creates an inspector drawer registration.

**Parameter `targetType`:** The selected object type handled by the drawer.

**Parameter `useForChildren`:** Whether the drawer may handle assignable derived target types.

**Parameter `priority`:** The tie-breaking priority after exactness and inheritance distance.

**Parameter `conditional`:** Whether CanInspect is a target-dependent predicate. Equally specific accepted peers remain an explicit ambiguity error.

**Exception `T:System.ArgumentNullException`:** Thrown when `targetType` is `null`.
