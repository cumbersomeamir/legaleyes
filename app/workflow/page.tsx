import Link from 'next/link';
import Image from 'next/image';

export default function WorkflowPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Workflow
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              Run pre-built workflows or build your own, tailored to your firm's specific needs and processes. Automate repetitive tasks and standardize best practices across your organization.
            </p>
            <Link
              href="/request-demo"
              className="inline-block bg-white text-[#0a0a0a] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors font-sans"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
              alt="Workflow Automation"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-serif mb-8">
                Automated Legal Workflows
              </h2>
              <p className="text-lg text-white/70 mb-6 font-sans">
                LegalEyes Workflow enables you to automate complex legal processes, from simple document generation to sophisticated multi-step workflows involving multiple team members, document reviews, and approvals.
              </p>
              <p className="text-lg text-white/70 mb-6 font-sans">
                Our workflow engine understands legal processes and can handle conditional logic, parallel processing, human-in-the-loop approvals, and integration with external systems. Whether you're automating contract generation, managing client onboarding, or streamlining litigation workflows, LegalEyes Workflow adapts to your needs.
              </p>
              <p className="text-lg text-white/70 mb-8 font-sans">
                Workflows can be triggered manually, scheduled, or automatically based on events. They integrate seamlessly with Assistant, Vault, and Knowledge, creating powerful end-to-end automation for your legal practice.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Visual workflow builder - no coding required</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Pre-built workflow templates for common legal processes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Integration with existing legal technology stack</span>
                </li>
              </ul>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                alt="Workflow Builder"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Workflow Capabilities</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Powerful automation tools for every aspect of legal practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Pre-Built Templates</h3>
              <p className="text-white/70 mb-4 font-sans">
                Start with professionally designed workflow templates for common legal processes. Templates include contract generation, client onboarding, matter intake, document review workflows, and compliance checklists.
              </p>
              <p className="text-white/70 font-sans">
                Each template is fully customizable and can be adapted to your firm's specific requirements. Templates are created by legal professionals who understand the nuances of legal practice, ensuring they reflect real-world workflows.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Custom Workflow Builder</h3>
              <p className="text-white/70 mb-4 font-sans">
                Build custom workflows using our intuitive visual builder. Drag and drop workflow steps, define conditions, set up approvals, and configure integrations - all without writing code.
              </p>
              <p className="text-white/70 font-sans">
                The builder supports complex logic including conditional branching, loops, parallel processing, and error handling. You can create workflows that handle edge cases and exceptions, ensuring robust automation for your legal processes.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Task Automation & Routing</h3>
              <p className="text-white/70 mb-4 font-sans">
                Automate task assignment and routing based on rules, workload, expertise, or availability. Workflows can automatically assign tasks to the right team members, send notifications, and track progress.
              </p>
              <p className="text-white/70 font-sans">
                Advanced routing capabilities include load balancing, skill-based routing, escalation rules, and automatic reassignment when team members are unavailable. This ensures work is distributed efficiently and nothing falls through the cracks.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">System Integration</h3>
              <p className="text-white/70 mb-4 font-sans">
                Integrate workflows with your existing legal technology stack. Connect to practice management systems, document management systems, billing systems, and other tools through our comprehensive API and pre-built connectors.
              </p>
              <p className="text-white/70 font-sans">
                Workflows can trigger actions in external systems, pull data from other platforms, and synchronize information across your technology ecosystem. This creates seamless automation that works with your existing tools rather than replacing them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Workflow Applications</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Real-world examples of workflow automation in legal practice
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 order-2 lg:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
                  alt="Contract Generation Workflow"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-4xl font-serif mb-6">Contract Generation & Review</h3>
                <p className="text-lg text-white/70 mb-4 font-sans">
                  Automate the entire contract lifecycle from generation to execution:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Generate contracts from templates with client-specific terms automatically populated</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Route contracts through review and approval workflows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Automated comparison with standard templates and flagging of deviations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Integration with e-signature platforms for seamless execution</span>
                  </li>
                </ul>
                <p className="text-lg text-white/70 font-sans">
                  A corporate law firm automated their contract generation process, reducing contract creation time from days to hours while ensuring consistency and reducing errors.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-serif mb-6">Client Onboarding</h3>
                <p className="text-lg text-white/70 mb-4 font-sans">
                  Streamline new client intake and onboarding with automated workflows:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Automated conflict checks and client verification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Generation of engagement letters and fee agreements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Automatic setup of matter files and document folders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Team notifications and task assignments</span>
                  </li>
                </ul>
                <p className="text-lg text-white/70 font-sans">
                  A mid-size firm reduced client onboarding time from 2-3 days to under 4 hours, improving client satisfaction and allowing attorneys to focus on legal work rather than administrative tasks.
                </p>
              </div>
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
                  alt="Client Onboarding"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 order-2 lg:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                  alt="Litigation Workflow"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-4xl font-serif mb-6">Litigation Workflow Management</h3>
                <p className="text-lg text-white/70 mb-4 font-sans">
                  Manage complex litigation processes with automated workflows:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Automated deadline tracking and calendar management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Document discovery and review workflows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Motion and brief drafting workflows with review cycles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Integration with court filing systems and e-discovery platforms</span>
                  </li>
                </ul>
                <p className="text-lg text-white/70 font-sans">
                  Litigation teams report significant improvements in deadline compliance and case organization, with automated workflows ensuring nothing is missed in complex, multi-party litigation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Builder Details */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-serif mb-8 text-center">Workflow Builder Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Visual Interface</h3>
                <p className="text-white/70 font-sans">
                  Intuitive drag-and-drop interface makes building workflows as simple as creating a flowchart. No technical expertise required.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Conditional Logic</h3>
                <p className="text-white/70 font-sans">
                  Support for complex conditional logic, branching, loops, and parallel processing. Handle any workflow complexity.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Approval Workflows</h3>
                <p className="text-white/70 font-sans">
                  Built-in support for multi-level approvals, delegation, and escalation. Configure approval chains that match your firm's structure.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Version Control</h3>
                <p className="text-white/70 font-sans">
                  Track workflow versions, test changes in sandbox environments, and roll back if needed. Maintain workflow history and audit trails.
                </p>
              </div>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
                alt="Workflow Builder Interface"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Analytics & Monitoring */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-serif mb-8">Workflow Analytics & Monitoring</h2>
              <p className="text-lg text-white/70 mb-6 font-sans">
                Monitor workflow performance with comprehensive analytics and reporting. Track execution times, identify bottlenecks, and optimize your processes for maximum efficiency.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif mb-3">Performance Metrics</h3>
                  <p className="text-white/70 font-sans">
                    Real-time dashboards show workflow execution times, success rates, error rates, and resource utilization. Identify which workflows are most effective and where improvements can be made.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-3">Bottleneck Identification</h3>
                  <p className="text-white/70 font-sans">
                    Analytics automatically identify bottlenecks in your workflows, showing where processes slow down or where manual intervention is frequently required. Use this data to optimize workflows.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-3">Audit Trails</h3>
                  <p className="text-white/70 font-sans">
                    Complete audit trails for all workflow executions, including who triggered workflows, what actions were taken, and when. Essential for compliance and process improvement.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
                alt="Analytics Dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif mb-6">
            Automate Your Legal Workflows
          </h2>
          <p className="text-xl text-white/70 mb-10 font-sans">
            See how Workflow can transform your legal practice. Request a demo to explore workflow automation.
          </p>
          <Link
            href="/request-demo"
            className="inline-block bg-white text-[#0a0a0a] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors text-lg font-sans"
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
