import javax.swing.*;
import javax.swing.border.EmptyBorder;
import javax.swing.border.LineBorder;
import javax.swing.plaf.basic.BasicScrollBarUI;
import java.awt.*;
import java.awt.event.*;
import java.awt.geom.RoundRectangle2D;
import java.io.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.List;
import java.util.prefs.Preferences;

public class CommunityPortal extends JFrame {
    // Pastel color palette
    private static final Color PASTEL_PINK = new Color(255, 182, 193);
    private static final Color PASTEL_BLUE = new Color(173, 216, 230);
    private static final Color PASTEL_PURPLE = new Color(221, 160, 221);
    private static final Color PASTEL_YELLOW = new Color(255, 255, 224);
    private static final Color PASTEL_GREEN = new Color(152, 251, 152);
    private static final Color PASTEL_ORANGE = new Color(255, 218, 185);
    private static final Color DARK_TEXT = new Color(45, 27, 78);
    private static final Color VIBRANT_GRADIENT_START = new Color(102, 126, 234);
    private static final Color VIBRANT_GRADIENT_END = new Color(118, 75, 162);

    // Components
    private JPanel mainPanel;
    private JTabbedPane tabbedPane;
    private JTextField nameField, emailField, phoneField;
    private JComboBox<String> eventTypeCombo;
    private JTextArea feedbackArea;
    private JLabel charCountLabel, statusLabel;
    private JButton submitButton, locationButton, clearPrefsButton;
    private Timer animationTimer;
    private List<AnimatedLabel> animatedLabels;
    private Preferences prefs;

    public CommunityPortal() {
        initializeComponents();
        setupUI();
        setupAnimations();
        loadPreferences();
    }

    private void initializeComponents() {
        prefs = Preferences.userNodeForPackage(CommunityPortal.class);
        animatedLabels = new ArrayList<>();
        
        setTitle("🌈 Community Portal - Vibrant Pastel Edition 🌈");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(1200, 800);
        setLocationRelativeTo(null);
        
        // Set custom look and feel
        try {
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeel());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void setupUI() {
        mainPanel = new GradientPanel();
        mainPanel.setLayout(new BorderLayout());
        
        // Create header
        JPanel headerPanel = createHeaderPanel();
        mainPanel.add(headerPanel, BorderLayout.NORTH);
        
        // Create tabbed pane
        tabbedPane = createStyledTabbedPane();
        
        // Add tabs
        tabbedPane.addTab("🏠 Home", createHomePanel());
        tabbedPane.addTab("🎊 Events", createEventsPanel());
        tabbedPane.addTab("📝 Registration", createRegistrationPanel());
        tabbedPane.addTab("📞 Contact", createContactPanel());
        
        mainPanel.add(tabbedPane, BorderLayout.CENTER);
        
        // Create footer
        JPanel footerPanel = createFooterPanel();
        mainPanel.add(footerPanel, BorderLayout.SOUTH);
        
        add(mainPanel);
    }

    private JPanel createHeaderPanel() {
        JPanel header = new GradientPanel(VIBRANT_GRADIENT_START, VIBRANT_GRADIENT_END);
        header.setLayout(new BorderLayout());
        header.setBorder(new EmptyBorder(20, 30, 20, 30));
        
        // Welcome message
        AnimatedLabel welcomeLabel = new AnimatedLabel("🌈 Welcome to Our Amazing Community Portal! 🌈");
        welcomeLabel.setFont(new Font("Arial", Font.BOLD, 28));
        welcomeLabel.setForeground(Color.WHITE);
        welcomeLabel.setHorizontalAlignment(SwingConstants.CENTER);
        welcomeLabel.startBounceAnimation();
        animatedLabels.add(welcomeLabel);
        
        AnimatedLabel subtitleLabel = new AnimatedLabel("✨ Connect, Engage, and Participate in Community Events ✨");
        subtitleLabel.setFont(new Font("Arial", Font.BOLD, 16));
        subtitleLabel.setForeground(PASTEL_YELLOW);
        subtitleLabel.setHorizontalAlignment(SwingConstants.CENTER);
        subtitleLabel.startSlideAnimation();
        animatedLabels.add(subtitleLabel);
        
        JPanel textPanel = new JPanel(new GridLayout(2, 1, 0, 5));
        textPanel.setOpaque(false);
        textPanel.add(welcomeLabel);
        textPanel.add(subtitleLabel);
        
        // Special offer
        JLabel offerLabel = new JLabel("🎉 Special Event Registration - 50% Off This Month! 🎊");
        offerLabel.setFont(new Font("Arial", Font.BOLD, 14));
        offerLabel.setForeground(PASTEL_PINK);
        offerLabel.setHorizontalAlignment(SwingConstants.CENTER);
        offerLabel.setBorder(new RoundedBorder(PASTEL_ORANGE, 15));
        offerLabel.setOpaque(true);
        offerLabel.setBackground(PASTEL_YELLOW);
        
        header.add(textPanel, BorderLayout.CENTER);
        header.add(offerLabel, BorderLayout.SOUTH);
        
        return header;
    }

    private JTabbedPane createStyledTabbedPane() {
        JTabbedPane pane = new JTabbedPane();
        pane.setFont(new Font("Arial", Font.BOLD, 14));
        pane.setBackground(PASTEL_BLUE);
        pane.setForeground(DARK_TEXT);
        return pane;
    }

    private JPanel createHomePanel() {
        JPanel panel = new GradientPanel(PASTEL_PINK, PASTEL_BLUE);
        panel.setLayout(new BorderLayout(20, 20));
        panel.setBorder(new EmptyBorder(30, 30, 30, 30));
        
        // Main content
        JPanel contentPanel = new JPanel(new GridBagLayout());
        contentPanel.setOpaque(false);
        GridBagConstraints gbc = new GridBagConstraints();
        gbc.insets = new Insets(10, 10, 10, 10);
        
        AnimatedLabel titleLabel = new AnimatedLabel("🏘️ Community Hub 🏘️");
        titleLabel.setFont(new Font("Arial", Font.BOLD, 32));
        titleLabel.setForeground(DARK_TEXT);
        titleLabel.startRainbowAnimation();
        animatedLabels.add(titleLabel);
        
        JTextArea descriptionArea = new JTextArea(
            "Welcome to our VIBRANT community portal where neighbors connect, " +
            "events come alive, and friendships flourish!\n\n" +
            "🌟 Discover upcoming events\n" +
            "📝 Register for activities\n" +
            "🤝 Stay connected with your amazing community"
        );
        descriptionArea.setFont(new Font("Arial", Font.BOLD, 16));
        descriptionArea.setForeground(DARK_TEXT);
        descriptionArea.setOpaque(false);
        descriptionArea.setEditable(false);
        descriptionArea.setLineWrap(true);
        descriptionArea.setWrapStyleWord(true);
        
        // Buttons panel
        JPanel buttonPanel = new JPanel(new FlowLayout());
        buttonPanel.setOpaque(false);
        
        locationButton = createStyledButton("🗺️ Find Nearby Events", PASTEL_GREEN);
        locationButton.addActionListener(e -> findNearbyEvents());
        
        clearPrefsButton = createStyledButton("🗑️ Clear Preferences", PASTEL_ORANGE);
        clearPrefsButton.addActionListener(e -> clearPreferences());
        
        buttonPanel.add(locationButton);
        buttonPanel.add(clearPrefsButton);
        
        statusLabel = new JLabel("");
        statusLabel.setFont(new Font("Arial", Font.BOLD, 14));
        statusLabel.setForeground(DARK_TEXT);
        statusLabel.setHorizontalAlignment(SwingConstants.CENTER);
        
        gbc.gridx = 0; gbc.gridy = 0;
        contentPanel.add(titleLabel, gbc);
        gbc.gridy = 1;
        contentPanel.add(descriptionArea, gbc);
        gbc.gridy = 2;
        contentPanel.add(buttonPanel, gbc);
        gbc.gridy = 3;
        contentPanel.add(statusLabel, gbc);
        
        panel.add(contentPanel, BorderLayout.CENTER);
        return panel;
    }

    private JPanel createEventsPanel() {
        JPanel panel = new GradientPanel(PASTEL_PURPLE, PASTEL_GREEN);
        panel.setLayout(new BorderLayout(20, 20));
        panel.setBorder(new EmptyBorder(20, 20, 20, 20));
        
        AnimatedLabel titleLabel = new AnimatedLabel("🎨 Community Events Gallery 🎪");
        titleLabel.setFont(new Font("Arial", Font.BOLD, 28));
        titleLabel.setForeground(DARK_TEXT);
        titleLabel.setHorizontalAlignment(SwingConstants.CENTER);
        titleLabel.startPulseAnimation();
        animatedLabels.add(titleLabel);
        
        // Events grid
        JPanel eventsGrid = new JPanel(new GridLayout(2, 3, 15, 15));
        eventsGrid.setOpaque(false);
        
        String[] events = {
            "🌞 Summer Festival 2024 🌞",
            "🌱 Community Garden Project 🌿", 
            "🎨 Art Workshop Series 🖌️",
            "⚽ Annual Sports Day 🏆",
            "🎵 Music Concert 🎤",
            "🍕 International Food Fair 🌮"
        };
        
        for (String event : events) {
            JPanel eventCard = createEventCard(event);
            eventsGrid.add(eventCard);
        }
        
        JScrollPane scrollPane = new JScrollPane(eventsGrid);
        scrollPane.setOpaque(false);
        scrollPane.getViewport().setOpaque(false);
        scrollPane.setBorder(null);
        customizeScrollBar(scrollPane);
        
        panel.add(titleLabel, BorderLayout.NORTH);
        panel.add(scrollPane, BorderLayout.CENTER);
        
        return panel;
    }

    private JPanel createEventCard(String eventName) {
        JPanel card = new RoundedPanel(20, PASTEL_YELLOW);
        card.setLayout(new BorderLayout(10, 10));
        card.setBorder(new EmptyBorder(15, 15, 15, 15));
        
        // Image placeholder
        JLabel imageLabel = new JLabel("🖼️ Event Image", SwingConstants.CENTER);
        imageLabel.setFont(new Font("Arial", Font.BOLD, 24));
        imageLabel.setForeground(DARK_TEXT);
        imageLabel.setPreferredSize(new Dimension(200, 150));
        imageLabel.setBorder(new RoundedBorder(PASTEL_BLUE, 10));
        imageLabel.setOpaque(true);
        imageLabel.setBackground(PASTEL_BLUE);
        
        // Event name
        JLabel nameLabel = new JLabel(eventName, SwingConstants.CENTER);
        nameLabel.setFont(new Font("Arial", Font.BOLD, 14));
        nameLabel.setForeground(DARK_TEXT);
        
        // Add hover effect
        card.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseEntered(MouseEvent e) {
                card.setBackground(PASTEL_GREEN);
                card.repaint();
            }
            
            @Override
            public void mouseExited(MouseEvent e) {
                card.setBackground(PASTEL_YELLOW);
                card.repaint();
            }
        });
        
        card.add(imageLabel, BorderLayout.CENTER);
        card.add(nameLabel, BorderLayout.SOUTH);
        
        return card;
    }

    private JPanel createRegistrationPanel() {
        JPanel panel = new GradientPanel(PASTEL_ORANGE, PASTEL_PURPLE);
        panel.setLayout(new BorderLayout(20, 20));
        panel.setBorder(new EmptyBorder(20, 20, 20, 20));
        
        AnimatedLabel titleLabel = new AnimatedLabel("📝 Event Registration ✨");
        titleLabel.setFont(new Font("Arial", Font.BOLD, 28));
        titleLabel.setForeground(DARK_TEXT);
        titleLabel.setHorizontalAlignment(SwingConstants.CENTER);
        animatedLabels.add(titleLabel);
        
        // Form panel
        JPanel formPanel = new RoundedPanel(20, Color.WHITE);
        formPanel.setLayout(new GridBagLayout());
        formPanel.setBorder(new EmptyBorder(30, 30, 30, 30));
        GridBagConstraints gbc = new GridBagConstraints();
        gbc.insets = new Insets(10, 10, 10, 10);
        gbc.anchor = GridBagConstraints.WEST;
        
        // Form fields
        gbc.gridx = 0; gbc.gridy = 0;
        formPanel.add(createStyledLabel("👤 Full Name:"), gbc);
        gbc.gridx = 1;
        nameField = createStyledTextField("Enter your AMAZING full name");
        formPanel.add(nameField, gbc);
        
        gbc.gridx = 0; gbc.gridy = 1;
        formPanel.add(createStyledLabel("✉️ Email Address:"), gbc);
        gbc.gridx = 1;
        emailField = createStyledTextField("your.awesome.email@example.com");
        formPanel.add(emailField, gbc);
        
        gbc.gridx = 0; gbc.gridy = 2;
        formPanel.add(createStyledLabel("📱 Phone Number:"), gbc);
        gbc.gridx = 1;
        phoneField = createStyledTextField("(555) 123-4567");
        phoneField.addFocusListener(new FocusAdapter() {
            @Override
            public void focusLost(FocusEvent e) {
                validatePhone();
            }
        });
        formPanel.add(phoneField, gbc);
        
        gbc.gridx = 0; gbc.gridy = 3;
        formPanel.add(createStyledLabel("🎉 Event Type:"), gbc);
        gbc.gridx = 1;
        eventTypeCombo = new JComboBox<>(new String[]{
            "Select an AMAZING event...",
            "🌞 Summer Festival",
            "🌱 Community Garden", 
            "🎨 Art Workshop",
            "⚽ Sports Day",
            "🎵 Music Concert",
            "🍕 Food Fair"
        });
        eventTypeCombo.setFont(new Font("Arial", Font.BOLD, 14));
        eventTypeCombo.setBackground(PASTEL_YELLOW);
        eventTypeCombo.addActionListener(e -> displaySelectedEvent());
        formPanel.add(eventTypeCombo, gbc);
        
        gbc.gridx = 0; gbc.gridy = 4;
        formPanel.add(createStyledLabel("💭 Additional Comments:"), gbc);
        gbc.gridx = 1; gbc.fill = GridBagConstraints.BOTH;
        feedbackArea = new JTextArea(4, 20);
        feedbackArea.setFont(new Font("Arial", Font.PLAIN, 14));
        feedbackArea.setBackground(PASTEL_YELLOW);
        feedbackArea.setBorder(new RoundedBorder(PASTEL_BLUE, 5));
        feedbackArea.setLineWrap(true);
        feedbackArea.setWrapStyleWord(true);
        feedbackArea.addKeyListener(new KeyAdapter() {
            @Override
            public void keyReleased(KeyEvent e) {
                updateCharCount();
            }
        });
        JScrollPane textScroll = new JScrollPane(feedbackArea);
        textScroll.setBorder(null);
        formPanel.add(textScroll, gbc);
        
        gbc.gridx = 1; gbc.gridy = 5; gbc.fill = GridBagConstraints.NONE;
        charCountLabel = new JLabel("0 characters typed! ✨");
        charCountLabel.setFont(new Font("Arial", Font.BOLD, 12));
        charCountLabel.setForeground(DARK_TEXT);
        formPanel.add(charCountLabel, gbc);
        
        gbc.gridx = 0; gbc.gridy = 6; gbc.gridwidth = 2; gbc.fill = GridBagConstraints.HORIZONTAL;
        submitButton = createStyledButton("🚀 Register for Event 🎊", VIBRANT_GRADIENT_START);
        submitButton.addActionListener(e -> handleSubmit());
        formPanel.add(submitButton, gbc);
        
        panel.add(titleLabel, BorderLayout.NORTH);
        panel.add(formPanel, BorderLayout.CENTER);
        
        return panel;
    }

    private JPanel createContactPanel() {
        JPanel panel = new GradientPanel(PASTEL_GREEN, PASTEL_PINK);
        panel.setLayout(new BorderLayout(20, 20));
        panel.setBorder(new EmptyBorder(30, 30, 30, 30));
        
        JLabel titleLabel = new JLabel("📞 Contact Information 📞", SwingConstants.CENTER);
        titleLabel.setFont(new Font("Arial", Font.BOLD, 28));
        titleLabel.setForeground(DARK_TEXT);
        
        JTextArea contactInfo = new JTextArea(
            "🏢 Community Portal Headquarters\n\n" +
            "📍 Address: 123 Community Street, Neighborville, ST 12345\n" +
            "📞 Phone: (555) 123-COMM\n" +
            "✉️ Email: hello@communityportal.com\n" +
            "🌐 Website: www.communityportal.com\n\n" +
            "🕒 Office Hours:\n" +
            "Monday - Friday: 9:00 AM - 6:00 PM\n" +
            "Saturday: 10:00 AM - 4:00 PM\n" +
            "Sunday: Closed\n\n" +
            "💬 Follow us on social media:\n" +
            "📘 Facebook: @CommunityPortal\n" +
            "🐦 Twitter: @CommPortal\n" +
            "📸 Instagram: @community_portal"
        );
        contactInfo.setFont(new Font("Arial", Font.BOLD, 16));
        contactInfo.setForeground(DARK_TEXT);
        contactInfo.setOpaque(false);
        contactInfo.setEditable(false);
        
        JPanel contentPanel = new RoundedPanel(20, Color.WHITE);
        contentPanel.setBorder(new EmptyBorder(30, 30, 30, 30));
        contentPanel.add(contactInfo);
        
        panel.add(titleLabel, BorderLayout.NORTH);
        panel.add(contentPanel, BorderLayout.CENTER);
        
        return panel;
    }

    private JPanel createFooterPanel() {
        JPanel footer = new GradientPanel(DARK_TEXT, VIBRANT_GRADIENT_END);
        footer.setBorder(new EmptyBorder(15, 30, 15, 30));
        
        JLabel footerLabel = new JLabel("© 2024 Community Portal - Bringing neighbors together through events and activities! 🌟");
        footerLabel.setFont(new Font("Arial", Font.BOLD, 12));
        footerLabel.setForeground(Color.WHITE);
        footerLabel.setHorizontalAlignment(SwingConstants.CENTER);
        
        footer.add(footerLabel);
        return footer;
    }

    private JLabel createStyledLabel(String text) {
        JLabel label = new JLabel(text);
        label.setFont(new Font("Arial", Font.BOLD, 14));
        label.setForeground(DARK_TEXT);
        return label;
    }

    private JTextField createStyledTextField(String placeholder) {
        JTextField field = new JTextField(20);
        field.setFont(new Font("Arial", Font.PLAIN, 14));
        field.setBackground(PASTEL_YELLOW);
        field.setBorder(new RoundedBorder(PASTEL_BLUE, 5));
        field.setText(placeholder);
        field.setForeground(Color.GRAY);
        
        field.addFocusListener(new FocusAdapter() {
            @Override
            public void focusGained(FocusEvent e) {
                if (field.getText().equals(placeholder)) {
                    field.setText("");
                    field.setForeground(DARK_TEXT);
                }
            }
            
            @Override
            public void focusLost(FocusEvent e) {
                if (field.getText().isEmpty()) {
                    field.setText(placeholder);
                    field.setForeground(Color.GRAY);
                }
            }
        });
        
        return field;
    }

    private JButton createStyledButton(String text, Color bgColor) {
        JButton button = new JButton(text) {
            @Override
            protected void paintComponent(Graphics g) {
                Graphics2D g2 = (Graphics2D) g.create();
                g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
                
                GradientPaint gradient = new GradientPaint(0, 0, bgColor, getWidth(), getHeight(), 
                    bgColor.brighter());
                g2.setPaint(gradient);
                g2.fillRoundRect(0, 0, getWidth(), getHeight(), 25, 25);
                
                g2.dispose();
                super.paintComponent(g);
            }
        };
        
        button.setFont(new Font("Arial", Font.BOLD, 14));
        button.setForeground(Color.WHITE);
        button.setOpaque(false);
        button.setContentAreaFilled(false);
        button.setBorderPainted(false);
        button.setFocusPainted(false);
        button.setPreferredSize(new Dimension(200, 40));
        button.setCursor(new Cursor(Cursor.HAND_CURSOR));
        
        // Hover effect
        button.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseEntered(MouseEvent e) {
                button.setBackground(bgColor.brighter());
            }
            
            @Override
            public void mouseExited(MouseEvent e) {
                button.setBackground(bgColor);
            }
        });
        
        return button;
    }

    private void setupAnimations() {
        animationTimer = new Timer(50, e -> {
            for (AnimatedLabel label : animatedLabels) {
                label.updateAnimation();
            }
            repaint();
        });
        animationTimer.start();
    }

    private void customizeScrollBar(JScrollPane scrollPane) {
        scrollPane.getVerticalScrollBar().setUI(new BasicScrollBarUI() {
            @Override
            protected void configureScrollBarColors() {
                this.thumbColor = PASTEL_PURPLE;
                this.trackColor = PASTEL_YELLOW;
            }
        });
    }

    // Event handlers
    private void findNearbyEvents() {
        statusLabel.setText("🗺️ Searching for nearby events... (Location services would be implemented here)");
        statusLabel.setForeground(VIBRANT_GRADIENT_START);
        
        Timer timer = new Timer(2000, e -> {
            statusLabel.setText("📍 Found 5 events within 10 miles of your location! 🎉");
            ((Timer) e.getSource()).stop();
        });
        timer.setRepeats(false);
        timer.start();
    }

    private void clearPreferences() {
        prefs.clear();
        nameField.setText("Enter your AMAZING full name");
        emailField.setText("your.awesome.email@example.com");
        phoneField.setText("(555) 123-4567");
        eventTypeCombo.setSelectedIndex(0);
        feedbackArea.setText("");
        updateCharCount();
        
        JOptionPane.showMessageDialog(this, "🗑️ All preferences have been cleared! ✨", 
            "Preferences Cleared", JOptionPane.INFORMATION_MESSAGE);
    }

    private void validatePhone() {
        String phone = phoneField.getText();
        if (!phone.matches("\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})") && 
            !phone.equals("(555) 123-4567")) {
            phoneField.setBorder(new LineBorder(Color.RED, 2));
            JOptionPane.showMessageDialog(this, "📱 Please enter a valid phone number!", 
                "Invalid Phone", JOptionPane.WARNING_MESSAGE);
        } else {
            phoneField.setBorder(new RoundedBorder(PASTEL_BLUE, 5));
        }
    }

    private void displaySelectedEvent() {
        if (eventTypeCombo.getSelectedIndex() > 0) {
            String selected = (String) eventTypeCombo.getSelectedItem();
            statusLabel.setText("Selected: " + selected + " 🎉");
            statusLabel.setForeground(VIBRANT_GRADIENT_START);
            
            // Save preference
            prefs.put("preferredEvent", selected);
        }
    }

    private void updateCharCount() {
        int count = feedbackArea.getText().length();
        charCountLabel.setText(count + " characters typed! ✨");
        if (count > 500) {
            charCountLabel.setForeground(Color.RED);
        } else {
            charCountLabel.setForeground(DARK_TEXT);
        }
    }

    private void handleSubmit() {
        if (validateForm()) {
            String message = "🎉 Registration Confirmed! 🎊\n\n" +
                "Thank you for registering, " + getFieldText(nameField) + "!\n" +
                "Event: " + eventTypeCombo.getSelectedItem() + "\n" +
                "We'll send confirmation details to: " + getFieldText(emailField);
            
            JOptionPane.showMessageDialog(this, message, "Registration Successful!", 
                JOptionPane.INFORMATION_MESSAGE);
            
            // Save registration data
            saveRegistrationData();
        }
    }

    private boolean validateForm() {
        if (getFieldText(nameField).isEmpty() || getFieldText(emailField).isEmpty() || 
            eventTypeCombo.getSelectedIndex() == 0) {
            JOptionPane.showMessageDialog(this, "❌ Please fill in all required fields!", 
                "Form Incomplete", JOptionPane.ERROR_MESSAGE);
            return false;
        }
        return true;
    }

    private String getFieldText(JTextField field) {
        String text = field.getText();
        // Check if it's still showing placeholder text
        if (text.contains("Enter your") || text.contains("your.awesome") || text.contains("(555)")) {
            return "";
        }
        return text;
    }

    private void saveRegistrationData() {
        prefs.put("lastName", getFieldText(nameField));
        prefs.put("lastEmail", getFieldText(emailField));
        prefs.put("lastPhone", getFieldText(phoneField));
        prefs.put("lastEvent", (String) eventTypeCombo.getSelectedItem());
        prefs.put("lastComments", feedbackArea.getText());
    }

    private void loadPreferences() {
        String savedEvent = prefs.get("preferredEvent", "");
        if (!savedEvent.isEmpty()) {
            for (int i = 0; i < eventTypeCombo.getItemCount(); i++) {
                if (eventTypeCombo.getItemAt(i).equals(savedEvent)) {
                    eventTypeCombo.setSelectedIndex(i);
                    break;
                }
            }
        }
    }

    // Custom component classes
    static class GradientPanel extends JPanel {
        private Color startColor, endColor;
        
        public GradientPanel() {
            this(PASTEL_PINK, PASTEL_BLUE);
        }
        
        public GradientPanel(Color start, Color end) {
            this.startColor = start;
            this.endColor = end;
        }
        
        @Override
        protected void paintComponent(Graphics g) {
            super.paintComponent(g);
            Graphics2D g2d = (Graphics2D) g;
            g2d.setRenderingHint(RenderingHints.KEY_RENDERING, RenderingHints.VALUE_RENDER_QUALITY);
            
            GradientPaint gradient = new GradientPaint(0, 0, startColor, getWidth(), getHeight(), endColor);
            g2d.setPaint(gradient);
            g2d.fillRect(0, 0, getWidth(), getHeight());
        }
    }

    static class RoundedPanel extends JPanel {
        private int cornerRadius;
        private Color backgroundColor;
        
        public RoundedPanel(int radius, Color bgColor) {
            this.cornerRadius = radius;
            this.backgroundColor = bgColor;
            setOpaque(false);
        }
        
        @Override
        protected void paintComponent(Graphics g) {
            super.paintComponent(g);
            Graphics2D g2 = (Graphics2D) g.create();
            g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
            
            g2.setColor(backgroundColor);
            g2.fillRoundRect(0, 0, getWidth() - 1, getHeight() - 1, cornerRadius, cornerRadius);
            
            g2.dispose();
        }
    }

    static class RoundedBorder extends LineBorder {
        private int radius;
        
        public RoundedBorder(Color color, int radius) {
            super(color, 2);
            this.radius = radius;
        }
        
        @Override
        public void paintBorder(Component c, Graphics g, int x, int y, int width, int height) {
            Graphics2D g2 = (Graphics2D) g.create();
            g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
            g2.setColor(getLineColor());
            g2.setStroke(new BasicStroke(getThickness()));
            g2.drawRoundRect(x, y, width - 1, height - 1, radius, radius);
            g2.dispose();
        }
    }

    static class AnimatedLabel extends JLabel {
        private float animationValue = 0f;
        private AnimationType animationType = AnimationType.NONE;
        private Color[] rainbowColors = {
            new Color(255, 107, 107), new Color(78, 205, 196), 
            new Color(69, 183, 209), new Color(249, 202, 36),
            new Color(240, 147, 43), new Color(235, 77, 75)
        };
        private int colorIndex = 0;
        
        public AnimatedLabel(String text) {
            super(text);
        }
        
        public void startBounceAnimation() {
            animationType = AnimationType.BOUNCE;
        }
        
        public void startSlideAnimation() {
            animationType = AnimationType.SLIDE;
        }
        
        public void startPulseAnimation() {
            animationType = AnimationType.PULSE;
        }
        
        public void startRainbowAnimation() {
            animationType = AnimationType.RAINBOW;
        }
        
        public void updateAnimation() {
            animationValue += 0.1f;
            
            switch (animationType) {
                case BOUNCE:
                    float bounce = (float) Math.abs(Math.sin(animationValue)) * 5;
                    setBorder(BorderFactory.createEmptyBorder((int) bounce, 0, 0, 0));
                    break;
                    
                case SLIDE:
                    if (animationValue < Math.PI) {
                        float slide = (float) (Math.sin(animationValue) * 20);
                        setBorder(BorderFactory.createEmptyBorder(0, Math.max(0, (int) slide), 0, 0));
                    }
                    break;
                    
                case PULSE:
                    float scale = 1.0f + (float) Math.sin(animationValue) * 0.05f;
                    Font currentFont = getFont();
                    if (currentFont != null) {
                        Font newFont = currentFont.deriveFont(currentFont.getSize() * scale);
                        setFont(newFont);
                    }
                    break;
                    
                case RAINBOW:
                    if (animationValue % 30 == 0) {
                        colorIndex = (colorIndex + 1) % rainbowColors.length;
                        setForeground(rainbowColors[colorIndex]);
                    }
                    break;
            }
        }
        
        private enum AnimationType {
            NONE, BOUNCE, SLIDE, PULSE, RAINBOW
        }
    }

    // Utility class for location services simulation
    static class LocationService {
        public static void getCurrentLocation(LocationCallback callback) {
            // Simulate location retrieval
            Timer timer = new Timer(1000, e -> {
                double latitude = 40.7128 + (Math.random() - 0.5) * 0.1;
                double longitude = -74.0060 + (Math.random() - 0.5) * 0.1;
                callback.onLocationReceived(latitude, longitude);
                ((Timer) e.getSource()).stop();
            });
            timer.setRepeats(false);
            timer.start();
        }
        
        interface LocationCallback {
            void onLocationReceived(double latitude, double longitude);
        }
    }

    // Enhanced event handling with animations
    private void showAnimatedMessage(String message, Color color) {
        JDialog dialog = new JDialog(this, "Notification", true);
        dialog.setSize(400, 200);
        dialog.setLocationRelativeTo(this);
        
        JPanel panel = new GradientPanel(color.brighter(), color);
        panel.setLayout(new BorderLayout());
        panel.setBorder(new EmptyBorder(20, 20, 20, 20));
        
        JLabel messageLabel = new JLabel("<html><center>" + message + "</center></html>");
        messageLabel.setFont(new Font("Arial", Font.BOLD, 16));
        messageLabel.setForeground(Color.WHITE);
        messageLabel.setHorizontalAlignment(SwingConstants.CENTER);
        
        JButton okButton = createStyledButton("OK ✨", PASTEL_GREEN);
        okButton.addActionListener(e -> dialog.dispose());
        
        JPanel buttonPanel = new JPanel(new FlowLayout());
        buttonPanel.setOpaque(false);
        buttonPanel.add(okButton);
        
        panel.add(messageLabel, BorderLayout.CENTER);
        panel.add(buttonPanel, BorderLayout.SOUTH);
        
        dialog.add(panel);
        dialog.setVisible(true);
    }

    // Enhanced form validation with visual feedback
    private void highlightField(JComponent field, boolean isValid) {
        if (isValid) {
            field.setBorder(new RoundedBorder(PASTEL_GREEN, 5));
        } else {
            field.setBorder(new RoundedBorder(Color.RED, 5));
            
            // Shake animation for invalid fields
            Timer shakeTimer = new Timer(50, null);
            final int[] shakeCount = {0};
            final Point originalLocation = field.getLocation();
            
            shakeTimer.addActionListener(e -> {
                if (shakeCount[0] < 10) {
                    int offset = (shakeCount[0] % 2 == 0) ? 5 : -5;
                    field.setLocation(originalLocation.x + offset, originalLocation.y);
                    shakeCount[0]++;
                } else {
                    field.setLocation(originalLocation);
                    shakeTimer.stop();
                }
            });
            shakeTimer.start();
        }
    }

    // Data persistence utilities
    private void exportRegistrationData() {
        try {
            File file = new File("registrations.txt");
            FileWriter writer = new FileWriter(file, true);
            writer.write("Registration Date: " + LocalDate.now().format(DateTimeFormatter.ISO_LOCAL_DATE) + "\n");
            writer.write("Name: " + getFieldText(nameField) + "\n");
            writer.write("Email: " + getFieldText(emailField) + "\n");
            writer.write("Phone: " + getFieldText(phoneField) + "\n");
            writer.write("Event: " + eventTypeCombo.getSelectedItem() + "\n");
            writer.write("Comments: " + feedbackArea.getText() + "\n");
            writer.write("------------------------\n");
            writer.close();
            
            showAnimatedMessage("📄 Registration data exported successfully! 🎉", PASTEL_GREEN);
        } catch (IOException e) {
            showAnimatedMessage("❌ Error exporting data: " + e.getMessage(), Color.RED);
        }
    }

    // Window event handling
    @Override
    protected void processWindowEvent(WindowEvent e) {
        if (e.getID() == WindowEvent.WINDOW_CLOSING) {
            // Check for unsaved changes
            if (hasUnsavedChanges()) {
                int choice = JOptionPane.showConfirmDialog(
                    this,
                    "🚨 You have unsaved changes. Do you want to save before exiting? 💾",
                    "Unsaved Changes",
                    JOptionPane.YES_NO_CANCEL_OPTION,
                    JOptionPane.WARNING_MESSAGE
                );
                
                if (choice == JOptionPane.YES_OPTION) {
                    saveRegistrationData();
                    super.processWindowEvent(e);
                } else if (choice == JOptionPane.NO_OPTION) {
                    super.processWindowEvent(e);
                }
                // Cancel option does nothing, keeps window open
            } else {
                super.processWindowEvent(e);
            }
        } else {
            super.processWindowEvent(e);
        }
    }
    
    private boolean hasUnsavedChanges() {
        return !getFieldText(nameField).isEmpty() || 
               !getFieldText(emailField).isEmpty() || 
               !getFieldText(phoneField).isEmpty() || 
               eventTypeCombo.getSelectedIndex() > 0 ||
               !feedbackArea.getText().trim().isEmpty();
    }

    // Main method and application launcher
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            try {
                // Set system look and feel for better integration
                UIManager.setLookAndFeel(UIManager.getSystemLookAndFeel());
                
                // Enable anti-aliasing for better text rendering
                System.setProperty("awt.useSystemAAFontSettings", "on");
                System.setProperty("swing.aatext", "true");
                
                // Create and show the application
                CommunityPortal app = new CommunityPortal();
                
                // Add a splash screen effect
                showSplashScreen();
                
                // Show the main window after splash
                Timer showTimer = new Timer(3000, e -> {
                    app.setVisible(true);
                    ((Timer) e.getSource()).stop();
                });
                showTimer.setRepeats(false);
                showTimer.start();
                
            } catch (Exception e) {
                e.printStackTrace();
                JOptionPane.showMessageDialog(null, 
                    "❌ Error starting application: " + e.getMessage(),
                    "Startup Error", 
                    JOptionPane.ERROR_MESSAGE);
            }
        });
    }
    
    private static void showSplashScreen() {
        JWindow splash = new JWindow();
        splash.setSize(500, 300);
        splash.setLocationRelativeTo(null);
        
        JPanel splashPanel = new GradientPanel(VIBRANT_GRADIENT_START, VIBRANT_GRADIENT_END);
        splashPanel.setLayout(new BorderLayout());
        splashPanel.setBorder(new EmptyBorder(50, 50, 50, 50));
        
        JLabel titleLabel = new JLabel("🌈 Community Portal 🌈", SwingConstants.CENTER);
        titleLabel.setFont(new Font("Arial", Font.BOLD, 32));
        titleLabel.setForeground(Color.WHITE);
        
        JLabel subtitleLabel = new JLabel("Loading your amazing community experience... ✨", SwingConstants.CENTER);
        subtitleLabel.setFont(new Font("Arial", Font.BOLD, 14));
        subtitleLabel.setForeground(PASTEL_YELLOW);
        
        JProgressBar progressBar = new JProgressBar();
        progressBar.setIndeterminate(true);
        progressBar.setBackground(PASTEL_BLUE);
        progressBar.setForeground(PASTEL_GREEN);
        
        splashPanel.add(titleLabel, BorderLayout.NORTH);
        splashPanel.add(subtitleLabel, BorderLayout.CENTER);
        splashPanel.add(progressBar, BorderLayout.SOUTH);
        
        splash.add(splashPanel);
        splash.setVisible(true);
        
        // Hide splash after 3 seconds
        Timer splashTimer = new Timer(3000, e -> {
            splash.setVisible(false);
            splash.dispose();
            ((Timer) e.getSource()).stop();
        });
        splashTimer.setRepeats(false);
        splashTimer.start();
    }
    
    // Additional utility methods for enhanced functionality
    private void addKeyboardShortcuts() {
        // Ctrl+S to save
        getRootPane().getInputMap(JComponent.WHEN_IN_FOCUSED_WINDOW)
            .put(KeyStroke.getKeyStroke(KeyEvent.VK_S, InputEvent.CTRL_DOWN_MASK), "save");
        getRootPane().getActionMap().put("save", new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                saveRegistrationData();
                showAnimatedMessage("💾 Data saved successfully! ✨", PASTEL_GREEN);
            }
        });
        
        // Ctrl+R to reset form
        getRootPane().getInputMap(JComponent.WHEN_IN_FOCUSED_WINDOW)
            .put(KeyStroke.getKeyStroke(KeyEvent.VK_R, InputEvent.CTRL_DOWN_MASK), "reset");
        getRootPane().getActionMap().put("reset", new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                clearPreferences();
            }
        });
        
        // F1 for help
        getRootPane().getInputMap(JComponent.WHEN_IN_FOCUSED_WINDOW)
            .put(KeyStroke.getKeyStroke(KeyEvent.VK_F1, 0), "help");
        getRootPane().getActionMap().put("help", new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                showHelpDialog();
            }
        });
    }
    
    private void showHelpDialog() {
        String helpText = "🌈 Community Portal Help 🌈\n\n" +
            "🏠 Home Tab: View community information and quick actions\n" +
            "🎊 Events Tab: Browse upcoming community events\n" +
            "📝 Registration Tab: Register for events\n" +
            "📞 Contact Tab: Find our contact information\n\n" +
            "⌨️ Keyboard Shortcuts:\n" +
            "Ctrl+S: Save current data\n" +
            "Ctrl+R: Reset form\n" +
            "F1: Show this help\n\n" +
            "✨ Features:\n" +
            "• Animated text and effects\n" +
            "• Form validation\n" +
            "• Data persistence\n" +
            "• Location services simulation\n" +
            "• Responsive design";
            
        showAnimatedMessage(helpText, PASTEL_PURPLE);
    }
}