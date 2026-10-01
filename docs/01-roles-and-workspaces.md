# Roles and workspace creation

## Create or select the workspace
1. Open the user card and select **مدير النظام المركزي**. This role is for setup and recovery; ordinary business steps below use their own roles.
2. Open **مساحات العمل → مساحة عمل جديدة**.
3. Enter the following values, then save:
| Field | Copy this value |
| --- | --- |
| الاسم بالعربية | جامعة بغداد |
| الاسم بالإنجليزية | University of Baghdad |
| الرمز | ub |
| رمز الشارة | UOB |
| النوع | جامعة حكومية |
| الحالة | نشطة |

**If `ub` already exists, reuse it.** Do not create `ub2` and expect the university and supply personas to inherit access; their scope is bound to workspace codes. On an empty instance this is a genuine workspace-creation step; on a populated instance explain reuse, without claiming to have created it.

For the optional supply redistribution, also create or reuse **الجامعة التكنولوجية**, English **University of Technology**, code **tu**, badge **UOT**, type **جامعة تقنية**, active. Assign it as a beneficiary of the supply project before redistribution. The available beneficiary persona can complete receipt actions for Baghdad only; the optional technology-university allocation will remain awaiting its own authorized receipt actor.

## Role card to keep beside the application
| Exact role label | Used for |
| --- | --- |
| المستخدم المختص — جامعة بغداد | Create projects/contracts; submit BOQ, schedules and progress |
| مهندس مقيم | Approve BOQ/schedule/progress; construction payment first desk; close periods |
| مدير مشروع | Project decisions and document approval; not a substitute for all payment desks |
| محلل موازنة | Project budgets/allocations and second payment desk |
| قسم الحسابات | Third payment desk and disbursement |
| ممثل المجهّز | Readiness and supplier correction submission |
| عضو لجنة الاستلام المخزني | Warehouse receipt |
| ممثل الجهة المستفيدة — جامعة بغداد | Preliminary receipt, reinspection and final acceptance for Baghdad |
| عضو لجنة الفحص والاستلام | Supply change-order technical review; not a substitute for the payment desk role |
| عضو لجنة أوامر الغيار | Change-order committee stages |
| عضو لجنة تثبيت الأسعار | Approved quantities/rates and days at the pricing stage |
| عضو لجنة المراجعة المصادقة | External endorsement when explicitly required; not the default final workflow owner |
| مدير عام | Portfolio presentation across workspaces |
| مدير النظام المركزي | Setup and documented administrative recovery; intentionally broad permissions |

Role switching in this prototype demonstrates capacities; it is not proof of independent authenticated accounts. The central administrator can approve its own submissions, so using it throughout would conceal the normal controls.

**Checkpoint:** a university specialist can see `ub`; an unrelated university role should not acquire access just because its name sounds similar.
