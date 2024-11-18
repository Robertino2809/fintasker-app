import React, { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

const BasicFAQ = () => {
  return (
    <div className="bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h3 className="mb-4 text-center text-3xl font-semibold">
          Frequently asked questions
        </h3>
        <Question title="Can I use FinTasker on multiple devices?" defaultOpen>
          <p>
            Yes! FinTasker is available on both desktop and mobile devices,
            allowing you to sync your tasks and financial data across platforms
            seamlessly.
          </p>
        </Question>
        <Question title="How does FinTasker help me manage my finances?">
          <p>
            FinTasker provides tools to track your income, expenses, and
            budgets. You can set financial goals, categorize transactions, and
            view reports to get a clear picture of your financial health.
          </p>
        </Question>
        <Question title="Can I track both personal and business finances with FinTasker?">
          <p>
            Absolutely! FinTasker is designed to handle multiple financial
            accounts and categories, making it easy to separate personal and
            business finances within the same app.
          </p>
        </Question>
        <Question title="Is my data secure with FinTasker?">
          <p>
            Yes, we prioritize the security of your data. All financial and task
            data is encrypted and stored securely, ensuring that your personal
            information remains safe.
          </p>
        </Question>
        <Question title="Can I export my financial data?">
          <p>
            You can upgrade your plan directly within the app by navigating to
            the settings menu and selecting the subscription that best fits your
            needs. Exporting data in CSV and PDF is possible only if you are
            premium user.
          </p>
        </Question>
      </div>
    </div>
  );
};

const Question = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: JSX.Element;
  defaultOpen?: boolean;
}) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);
  const [hasMounted, setHasMounted] = useState(false);

  // Ensure logic only runs after mounting to prevent SSR hydration issues
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-slate-300"
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: {
              color: "rgba(3, 6, 23, 0)",
            },
            closed: {
              color: "rgba(3, 6, 23, 1)",
            },
          }}
          className="bg-blue-500 bg-clip-text text-left text-lg font-medium"
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: "180deg",
              color: "rgb(59 130 246)",
            },
            closed: {
              rotate: "0deg",
              color: "#030617",
            },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-slate-600"
      >
        <p ref={ref}>{children}</p>
      </motion.div>
    </motion.div>
  );
};

export default BasicFAQ;
